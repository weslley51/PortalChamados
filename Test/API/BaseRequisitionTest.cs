using BaseApiArchitecture.Implementations;
using Data;
using Data.Repositories;
using Domain.Filters;
using Domain.Models;
using PortalChamados.Core.BussinessServices;
using System;
using System.Threading.Tasks;
using Xunit;

namespace Test.API
{
	public class BaseRequisitionTest
    {
        [Fact]
        public async Task GetWithFilters()
        {
			var Log = new LogService();
			var Filter = new ChamadoFilter();
			var Context = new PortalContext();

			var Unit = new UnitOfWork(Context);
			var Strategy = new FunctionProcessStrategy(Log);
			var Repository = new ChamadoRepository(Context);

			//var Bussiness = new BaseOperationsService<Chamado>(Repository, Strategy, Unit, Log, null);

			//await Assert.ThrowsAsync<NotImplementedException>(async() => await Bussiness.GetWithFilter(Filter));
			//Assert.True(Result.IsSuccess && Result?.Data.Count() > 0);
        }
    }
}
