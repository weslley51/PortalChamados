using BaseApiArchitecture.Implementations;
using BaseApiArchitecture.Interfaces;
using Domain.Models;

namespace PortalChamados.Core.Controllers
{
    public class TesteController : Controller<listingsAndReviews>
    {
		public TesteController(IProcessmentCommand<listingsAndReviews> BaseOperations) : base(BaseOperations)
        {
		}
	}
}
