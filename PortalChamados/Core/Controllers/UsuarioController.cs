using System.Threading.Tasks;
using BaseApiArchitecture.Domain;
using BaseApiArchitecture.Implementations;
using Domain.Models;
using Domain.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PortalChamados.Core.Interfaces.BussinessServices;

namespace PortalChamados.Core.Controllers
{
    public class UsuarioController : Controller<Usuario>
    {
		private IGerenciarUsuarios GerenciarUsuario { get; set; }

		public UsuarioController(IGerenciarUsuarios GerenciarUsuario) : base(GerenciarUsuario)
        {
			this.GerenciarUsuario = GerenciarUsuario;
		}

		[AllowAnonymous]
		[HttpPost, Route("Autenticar")]
		public async Task<Result<UsuarioViewModel>> Autenticar([FromBody]Usuario Usuario)
		{
			return (await GerenciarUsuario.Autenticar(Usuario));			
		}

		[HttpPost, Route("AlterarSenha")]
		public async Task<Result<UsuarioViewModel>> AlterarSenha([FromBody]AlterarSenhaViewModel Usuario)
		{
			return (await GerenciarUsuario.AlterarSenha(Usuario));
		}

		[HttpPost, Route("ResetarSenha")]
		public async Task<Result<UsuarioViewModel>> ResetarSenha([FromBody]Usuario Usuario)
		{
			return (await GerenciarUsuario.ResetarSenha(Usuario));
		}
	}
}
