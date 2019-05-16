using BaseApiArchitecture.Domain;
using BaseApiArchitecture.Interfaces;
using Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PortalChamados.Core.Interfaces.BussinessServices
{
	public interface IGerenciarChamados : IBaseOperations<Chamado>
	{
		Task<IEnumerable<Result<Chamado>>> Novo(params Chamado[] Entities);
		Task<IEnumerable<Result<Chamado>>> Finalizar(params Chamado[] Entities);
	}
}
