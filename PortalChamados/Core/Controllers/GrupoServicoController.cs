using BaseApiArchitecture.Implementations;
using BaseApiArchitecture.Interfaces;
using Domain.Models;

namespace PortalChamados.Core.Controllers
{
	public class GrupoServicoController : Controller<GrupoServico>
	{
		public GrupoServicoController(IProcessmentCommand<GrupoServico> BussinessService) : base(BussinessService)
		{
		}
	}
}
