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
    [Route("api/[controller]")]
    public class UsuarioController : Controller
    {
		private IGerenciarUsuarios GerenciarUsuario { get; set; }

		public UsuarioController(IGerenciarUsuarios GerenciarUsuario)
        {
			this.GerenciarUsuario = GerenciarUsuario;
		}

		[AllowAnonymous]
		[HttpPost("autenticar")]
		public async Task<Result<UsuarioViewModel>> Autenticar([FromBody]params Usuario[] Usuarios)
		{
			return await GerenciarUsuario.Autenticar(Usuarios[0]);			
		}

		[HttpPost("alterar-senha")]
		public async Task<Result<UsuarioViewModel>> AlterarSenha([FromBody]AlterarSenhaViewModel Usuario)
		{
			return await GerenciarUsuario.AlterarSenha(Usuario);
		}

		[HttpPost("resetar-senha")]
		public async Task<Result<UsuarioViewModel>> ResetarSenha([FromBody]Usuario Usuario)
		{
			return await GerenciarUsuario.ResetarSenha(Usuario);
		}

        [HttpPut("{Id}/atualizar-permissoes")]
        public async Task<Result<UsuarioViewModel>> AtualizarPermissoes(int Id, [FromBody]Permissao[] Permissoes)
        {
            return await GerenciarUsuario.AtualizarPermissoes(Id, Permissoes);
        }
    }
}
