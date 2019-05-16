using BaseApiArchitecture.Implementations;
using BaseApiArchitecture.Interfaces;
using Domain.Models;

namespace PortalChamados.Core.Controllers
{
	public class DepartamentoController : Controller<Departamento>
	{
		public DepartamentoController(IBaseOperations<Departamento> BussinessService, IFilter<Departamento> Filters) : base(BussinessService, Filters)
		{
		}
	}
}
