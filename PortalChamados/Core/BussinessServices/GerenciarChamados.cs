using AutoMapper;
using BaseApiArchitecture.Domain;
using BaseApiArchitecture.Implementations;
using BaseApiArchitecture.Interfaces;
using BaseApiArchitecture.Utils;
using Domain.Models;
using Microsoft.Extensions.Options;
using PortalChamados.Core.Configurations;
using PortalChamados.Core.Interfaces.BussinessServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using static Domain.Utils.Enums;

namespace PortalChamados.Core.BussinessServices
{
    public class GerenciarChamados : IGerenciarChamados
    {
        private readonly IMapper Mapper;
        private readonly ClaimsPrincipal Principal;
        private readonly IRepository<Chamado> Repository;
        private readonly IRepository<Status> StatusRepository;
        private readonly IRepository<Usuario> UsuarioRepository;
        private readonly IRepository<Servico> ServicoRepository;
        private readonly IProcessmentCommand ProcessmentCommand;


        public GerenciarChamados
        (
            ClaimsPrincipal Principal, IRepository<Usuario> UsuarioRepository, IRepository<Status> StatusRepository, IRepository<Servico> ServicoRepository,
            IRepository<Chamado> Repository, IProcessmentCommand ProcessmentCommand
        )
        {
            this.Principal = Principal;
            this.Repository = Repository;
            this.StatusRepository = StatusRepository;
            this.ServicoRepository = ServicoRepository;
            this.UsuarioRepository = UsuarioRepository;
            this.ProcessmentCommand = ProcessmentCommand;
        }

        public Task<Result<Chamado>> Finalizar(Chamado Chamado)
        {
            return null;
        }

        public async Task<Result<Chamado>> Novo(Chamado Chamado)
        {
            return await ProcessmentCommand.Execute(async () =>
            {
                var Erros = new List<string>();
                var Solicitante = new Usuario { Id = Convert.ToInt32(Principal.GetClaim("Id")) };

                Chamado.Solicitante = await UsuarioRepository.GetById(Solicitante);
                Chamado.Servico = await ServicoRepository.GetById(Chamado.Servico);
                Chamado.ChamadoPrincipal = await Repository.GetById(Chamado.ChamadoPrincipal);

                Erros.AddRange(Chamado.IsValid());

                if (Erros.Count > 0)
                    throw new ValidationException(Chamado, Erros.ToArray());

                await Repository.Insert(Chamado);
                return Chamado;
            });
        }

        public async Task<Result<Chamado>> Alterar(Chamado Chamado)
        {
            return await ProcessmentCommand.Execute(async () =>
            {
                var Erros = new List<string>();
                var Banco = await Repository.GetById(Chamado);

                Banco.SetarAlteracoes(Chamado);
                Erros.AddRange(Banco.IsValid());

                if (Erros.Count > 0)
                    throw new ValidationException(Banco, Erros.ToArray());

                await Repository.Update(Banco);
                return Banco;
            });
        }
    }
}
