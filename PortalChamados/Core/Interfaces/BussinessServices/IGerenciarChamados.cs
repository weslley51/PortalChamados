using BaseApiArchitecture.Domain;
using BaseApiArchitecture.Interfaces;
using Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PortalChamados.Core.Interfaces.BussinessServices
{
	public interface IGerenciarChamados 
	{
		Task<Result<Chamado>> Novo(Chamado Chamados);
        Task<Result<Chamado>> Alterar(Chamado Chamado);
        Task<Result<Chamado>> Finalizar(Chamado Chamados);
	}
}
