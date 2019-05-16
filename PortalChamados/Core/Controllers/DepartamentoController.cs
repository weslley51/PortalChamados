using BaseApiArchitecture.Implementations;
using BaseApiArchitecture.Interfaces;
using Domain.Models;

namespace PortalChamados.Core.Controllers
{
	public class DepartamentoController : Controller<Departamento>
	{
		public DepartamentoController(IBaseOperations<Departamento> BussinessService) : base(BussinessService)
		{
		}
	}
}
