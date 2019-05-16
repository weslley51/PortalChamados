using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BaseApiArchitecture.Domain;
using BaseApiArchitecture.Interfaces;
using Domain.Models;
using Domain.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PortalChamados.Core.Interfaces.BussinessServices;

namespace PortalChamados.Core.Controllers
{
	public class UsuarioController : IController<Usuario>
    {
		private IGerenciarUsuarios GerenciarUsuario { get; set; }

		public UsuarioController(IGerenciarUsuarios GerenciarUsuario)
        {
			this.GerenciarUsuario = GerenciarUsuario;
		}

		[HttpGet]
		public async Task<Result<IEnumerable<BaseEntity>>> Get()
		{
			var Result = await GerenciarUsuario.GetAll();
			return Result.ConvertData(Result.Data.Cast<BaseEntity>());
		}

		[HttpGet("{Id}")]
		public async Task<Result<BaseEntity>> Get(int Id)
		{
			var Result = await GerenciarUsuario.GetById(Id);
			return Result.ConvertData<BaseEntity>(Result.Data);
		}

		[HttpGet("{Page}/{Quantity}")]
		public async Task<Result<IEnumerable<BaseEntity>>> Get(int Page = 1, int Quantity = 10)
		{
			var Result = await GerenciarUsuario.GetAll(Page, Quantity);
			return Result.ConvertData(Result.Data.Cast<BaseEntity>());
		}

		public Task<Result<IEnumerable<BaseEntity>>> Delete(params int[] Ids)
		{
			throw new System.NotImplementedException();
		}

		public Task<IEnumerable<Result<BaseEntity>>> Post(params Usuario[] Entities)
		{
			throw new System.NotImplementedException();
		}

		public Task<IEnumerable<Result<BaseEntity>>> Put(params Usuario[] Entities)
		{
			throw new System.NotImplementedException();
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
