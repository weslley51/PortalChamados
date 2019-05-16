using System;
using System.Threading.Tasks;
using BaseApiArchitecture.Domain;
using BaseApiArchitecture.Interfaces;

namespace PortalChamados.Core.BussinessServices
{
	public class LogService : ILogService
	{
		public Task SaveChanges(BaseEntity OldObject, BaseEntity NewObject, int UserId)
		{
			throw new NotImplementedException();
		}

		public Task<string> SaveExceptions(Exception Exception, int UserId)
		{
			throw new NotImplementedException();
		}
	}
}
