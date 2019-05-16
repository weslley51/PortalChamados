using BaseApiArchitecture.Implementations;
using BaseApiArchitecture.Interfaces;
using Domain.Models;

namespace PortalChamados.Core.Controllers
{
	public class StatusController : Controller<Status>
	{
		public StatusController(IBaseOperations<Status> BussinessService) : base(BussinessService)
		{
		}
	}
}
