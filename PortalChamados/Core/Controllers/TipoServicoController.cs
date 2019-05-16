using BaseApiArchitecture.Implementations;
using BaseApiArchitecture.Interfaces;
using Domain.Models;

namespace PortalChamados.Core.Controllers
{
	public class TipoServicoController : Controller<TipoServico>
	{
		public TipoServicoController(IBaseOperations<TipoServico> BussinessService, IFilter<TipoServico> Filters) : base(BussinessService, Filters)
		{
		}
	}
}
