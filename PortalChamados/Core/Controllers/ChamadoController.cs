using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BaseApiArchitecture.Domain;
using BaseApiArchitecture.Interfaces;
using Domain.Models;
using Microsoft.AspNetCore.Mvc;
using PortalChamados.Core.Interfaces.BussinessServices;

namespace PortalChamados.Core.Controllers
{
	public class ChamadoController : IController<Chamado>
	{
		private readonly IGerenciarChamados GerenciarChamados;

		public ChamadoController(IGerenciarChamados GerenciarChamados)
		{
			this.GerenciarChamados = GerenciarChamados;
		}

		[HttpGet]
		public async Task<Result<IEnumerable<BaseEntity>>> Get()
		{
			var Result = await GerenciarChamados.GetAll();
			return Result.ConvertData(Result.Data.Cast<BaseEntity>());
		}

		[HttpGet("{Id}")]
		public async Task<Result<BaseEntity>> Get(int Id)
		{
			var Result = await GerenciarChamados.GetById(Id);
			return Result.ConvertData<BaseEntity>(Result.Data);
		}

		[HttpGet("{Page}/{Quantity}")]
		public async Task<Result<IEnumerable<BaseEntity>>> Get(int Page = 1, int Quantity = 10)
		{
			var Result = await GerenciarChamados.GetAll(Page, Quantity);
			return Result.ConvertData(Result.Data.Cast<BaseEntity>());
		}

		public async Task<Result<IEnumerable<BaseEntity>>> Delete(params int[] Ids)
		{
			throw new System.NotImplementedException();
		}

		public async Task<IEnumerable<Result<BaseEntity>>> Post([FromBody] params Chamado[] Entities)
		{
			throw new System.NotImplementedException();
		}

		public async Task<IEnumerable<Result<BaseEntity>>> Put(params Chamado[] Entities)
		{
			throw new System.NotImplementedException();
		}
	}
}
