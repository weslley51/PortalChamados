using BaseApiArchitecture.Implementations;
using BaseApiArchitecture.Interfaces;
using Domain.Models;

namespace PortalChamados.Core.Controllers
{
	public class StatusController : Controller<Status>
	{
		public StatusController(IProcessmentCommand<Status> BussinessService) : base(BussinessService)
		{
		}
	}
}
