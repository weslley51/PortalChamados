using AutoMapper;
using BaseApiArchitecture.Domain;
using BaseApiArchitecture.Implementations;
using BaseApiArchitecture.Interfaces;
using BaseApiArchitecture.Utils;
using Data;
using Domain.Models;
using Domain.ViewModels;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using PortalChamados.Core.Configurations;
using PortalChamados.Core.Interfaces.BussinessServices;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace PortalChamados.Core.BussinessServices
{
    public class GerenciarUsuario : IGerenciarUsuarios
    {
        private readonly IMapper Mapper;
        private readonly AppSettings AppSettings;
        private readonly ClaimsPrincipal Principal;
        private readonly IRepository<Usuario> Repository;
        private readonly IRepository<Permissao> PermissaoRepository;
        private readonly IRepository<PermissaoUsuario> PermissaoUsuarioRepository;
        private readonly IProcessmentCommand ProcessmentCommand;

        public GerenciarUsuario
        (
            IOptions<AppSettings> AppSettings, IMapper Mapper, ClaimsPrincipal Principal, IRepository<Usuario> Repository,
            IRepository<PermissaoUsuario> PermissaoUsuarioRepository, IRepository<Permissao> PermissaoRepository, IProcessmentCommand ProcessmentCommand
        )
        {
            this.Mapper = Mapper;
            this.Principal = Principal;
            this.Repository = Repository;
            this.AppSettings = AppSettings.Value;
            this.ProcessmentCommand = ProcessmentCommand;
            this.PermissaoRepository = PermissaoRepository;
            this.PermissaoUsuarioRepository = PermissaoUsuarioRepository;
        }

        public virtual async Task<Result<UsuarioViewModel>> ConsultarPorId(int Id)
        {
            return await ProcessmentCommand.Execute(async () => Mapper.Map<UsuarioViewModel>(await Repository.GetById(new Usuario { Id = Id })));
        }

        public virtual async Task<Result<IEnumerable<UsuarioViewModel>>> ConsultarPorFiltro(IFilter<Usuario> Filter)
        {
            return await ProcessmentCommand.Execute(async () => Mapper.Map<IEnumerable<UsuarioViewModel>>(await Repository.GetWithFilter(Filter)));
        }

        public virtual async Task<Result<UsuarioViewModel>> Excluir(params int[] Ids)
        {
            return await ProcessmentCommand.Execute<UsuarioViewModel>(async () =>
            {
                await Repository.Delete(Ids.Select(x => new Usuario { Id = x }).ToArray());
                return null;
            }, true);
        }

        public virtual async Task<IEnumerable<Result<UsuarioViewModel>>> Novo(params Usuario[] Usuarios)
        {
            await ProcessmentCommand.Execute<UsuarioViewModel>(async () =>
            {
                await Repository.Insert(Usuarios.Where(x => x.Id == 0)?.ToArray());
                return null;
            }, true);

            return new List<Result<UsuarioViewModel>> { new Result<UsuarioViewModel>(false, null) };
        }

        public virtual async Task<IEnumerable<Result<UsuarioViewModel>>> Atualizar(params Usuario[] Usuarios)
        {
            await ProcessmentCommand.Execute<UsuarioViewModel>(async () =>
            {
                await Repository.Update(Usuarios.Where(x => x.Id == 0)?.ToArray());
                return null;
            }, true);

            return new List<Result<UsuarioViewModel>> { new Result<UsuarioViewModel>(false, null) };
        }

        public async Task<Result<UsuarioViewModel>> AlterarSenha(AlterarSenhaViewModel Usuario)
        {
            return await ProcessmentCommand.Execute<UsuarioViewModel>(async () =>
            {
                var Id = Convert.ToInt32(Principal.GetClaim("Id"));
                var UsuarioBanco = await Repository.GetById(new Usuario { Id = Id });

                if (Usuario.NovaSenha != Usuario.ConfirmacaoNovaSenha)
                    throw new ValidationException(Usuario, "Senhas informadas não são iguais!");

                ValidarInformacoesLogin(UsuarioBanco, new Usuario { Senha = Usuario.Senha });

                UsuarioBanco.Senha = Criptography.GetHash(Usuario.NovaSenha, UsuarioBanco.Salt);
                await Repository.Update(UsuarioBanco);
                return null;
            });
        }

        public async Task<Result<UsuarioViewModel>> Autenticar(Usuario Usuario)
        {
            return await ProcessmentCommand.Execute(async () =>
            {
                //var UsuarioBanco = (await Repository.GetWithFilter(x => x.Login.ToLower() == Usuario.Login.ToLower()))?.FirstOrDefault();
                var UsuarioBanco = new Usuario { Login = "gti", Salt = "79WTLkIbL7kcf0IrxCJGxva4PBIxK2oSp06HiMjlZzA=", Senha = "I53LDJcVAV+yJZL56f5G8xYvSJdrmu59SExGgP1HIvg=" };
                ValidarInformacoesLogin(UsuarioBanco, Usuario);

                var Jwt = new JwtSecurityTokenHandler();
                var Token = Jwt.CreateToken(CreateToken(UsuarioBanco));
                var ViewModel = Mapper.Map<UsuarioViewModel>(UsuarioBanco);

                ViewModel.Token = Jwt.WriteToken(Token);

                return ViewModel;
            });
        }

        public async Task<Result<UsuarioViewModel>> ResetarSenha(Usuario Usuario)
        {
            return await ProcessmentCommand.Execute<UsuarioViewModel>(async () =>
            {
                var Id = Convert.ToInt32(Principal.GetClaim("Id"));
                var UsuarioJwt = await Repository.GetById(new Usuario { Id = Id });
                var UsuarioBanco = await Repository.GetById(Usuario);

                if (UsuarioJwt.Id != Usuario.Id && Usuario.PermissoesUsuario.Any(x => x.PermissaoId == 1))
                    throw new ValidationException(Usuario, "Usuário não possuí permissão para realizar a operação solicitada!");

                UsuarioBanco.ResetarSenha();
                await Repository.Update(UsuarioBanco);
                return null;
            });
        }

        public async Task<Result<UsuarioViewModel>> AtualizarPermissoes(int Id, params Permissao[] Permissoes)
        {
            return await ProcessmentCommand.Execute<UsuarioViewModel>(async () =>
            {
                var Ids = Permissoes.Select(x => x.Id);
                var Usuario = await Repository.GetById(new Usuario { Id = Id });

                if (Usuario == null)
                    throw new ValidationException(new UsuarioViewModel(), "Usuario não localizado !");

                if ((await (PermissaoRepository as Repository<Permissao>).GetWithFilter(x => Ids.Contains(x.Id))).Count() != Ids.Count())
                    throw new ValidationException(new UsuarioViewModel(), "Uma ou mais permissões não foram localizadas !");

                await PermissaoUsuarioRepository.Delete(Usuario.PermissoesUsuario.ToArray());
                await PermissaoUsuarioRepository.Insert(Permissoes.Select(x => new PermissaoUsuario { UsuarioId = Id, PermissaoId = x.Id }).ToArray());
                return null;
            }, true);
        }

        private void ValidarInformacoesLogin(Usuario UsuarioBanco, Usuario Usuario)
        {
            if (UsuarioBanco == null)
                throw new ValidationException(Usuario, "Usuário inexistente no sistema!");

            if (Criptography.GetHash(Usuario.Senha, UsuarioBanco.Salt) != UsuarioBanco.Senha)
                throw new ValidationException(Usuario, "Senha inválida!");
        }

        private SecurityTokenDescriptor CreateToken(Usuario Usuario)
        {
            var Key = Encoding.ASCII.GetBytes(AppSettings.Secret);

            return new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim("Id", Usuario.Id.ToString()),
                    new Claim(ClaimTypes.Name, Usuario.Login)
                }),
                Expires = DateTime.UtcNow.AddDays(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Key), SecurityAlgorithms.HmacSha256Signature)
            };
        }
    }
}
