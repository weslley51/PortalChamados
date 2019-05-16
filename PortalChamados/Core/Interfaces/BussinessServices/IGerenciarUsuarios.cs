using BaseApiArchitecture.Domain;
using BaseApiArchitecture.Interfaces;
using Domain.Models;
using Domain.ViewModels;
using System.Threading.Tasks;

namespace PortalChamados.Core.Interfaces.BussinessServices
{
	public interface IGerenciarUsuarios : IBaseOperations<Usuario>
	{
		Task<Result<UsuarioViewModel>> Autenticar(Usuario Usuario);
		Task<Result<UsuarioViewModel>> AlterarSenha(AlterarSenhaViewModel Usuario);
		Task<Result<UsuarioViewModel>> ResetarSenha(Usuario Usuario);
	}
}
