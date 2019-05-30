using BaseApiArchitecture.Implementations;
using BaseApiArchitecture.Interfaces;
using Domain.Models;

namespace PortalChamados.Core.Controllers
{
	public class DepartamentoController : Controller<Departamento>
	{
		public DepartamentoController(IProcessmentCommand<Departamento> BussinessService) : base(BussinessService)
		{
		}
	}
}
