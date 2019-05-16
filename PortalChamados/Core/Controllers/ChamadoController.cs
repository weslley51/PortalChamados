using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BaseApiArchitecture.Domain;
using BaseApiArchitecture.Implementations;
using Domain.Models;
using Microsoft.AspNetCore.Mvc;
using PortalChamados.Core.Interfaces.BussinessServices;

namespace PortalChamados.Core.Controllers
{
    public class ChamadoController : Controller<Chamado>
	{
		private readonly IGerenciarChamados GerenciarChamados;

		public ChamadoController(IGerenciarChamados GerenciarChamados) : base (GerenciarChamados)
		{
			this.GerenciarChamados = GerenciarChamados;
		}

		public override async Task<IEnumerable<Result<BaseEntity>>> Post([FromBody] params Chamado[] Entities)
		{
			throw new System.NotImplementedException();
		}

		public override async Task<IEnumerable<Result<BaseEntity>>> Put(params Chamado[] Entities)
		{
			throw new System.NotImplementedException();
		}
	}
}
