using BaseApiArchitecture.Interfaces;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using System;
using System.Threading.Tasks;

namespace Data.Mongo
{
	public class UnitOfWork : IUnitOfWork, IDisposable
	{
		public IMongoDatabase Context { get; private set; }
		private IClientSessionHandle Session;

		public UnitOfWork(IConfiguration Configuration)
		{
			var client = new MongoClient(Configuration.GetConnectionString("MongoDb"));
			Context = client.GetDatabase("sample_airbnb");
			Session = client.StartSession();
		}

		public async Task Commit()
		{
			await Session.CommitTransactionAsync();
		}

		public void Close()
		{
			Dispose();
		}

		public string GetContextId()
		{
			return Context.GetHashCode().ToString();
		}

		public void Dispose()
		{
			Session.Dispose();
		}
	}
}
