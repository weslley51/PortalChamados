using BaseApiArchitecture.Domain;
using BaseApiArchitecture.Interfaces;
using Domain.Models;
using Domain.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PortalChamados.Core.Interfaces.BussinessServices
{
	public interface IGerenciarUsuarios
    {
        Task<Result<UsuarioViewModel>> ConsultarPorId(int Id);
        Task<Result<IEnumerable<UsuarioViewModel>>> ConsultarPorFiltro(IFilter<Usuario> Filter);
        Task<Result<UsuarioViewModel>> Excluir(params int[] Ids);
        Task<IEnumerable<Result<UsuarioViewModel>>> Novo(params Usuario[] Usuarios);
        Task<IEnumerable<Result<UsuarioViewModel>>> Atualizar(params Usuario[] Usuarios);
        Task<Result<UsuarioViewModel>> Autenticar(Usuario Usuario);
		Task<Result<UsuarioViewModel>> AlterarSenha(AlterarSenhaViewModel Usuario);
		Task<Result<UsuarioViewModel>> ResetarSenha(Usuario Usuario);
        Task<Result<UsuarioViewModel>> AtualizarPermissoes(int Id, params Permissao[] Permissoes);

    }
}
