using BaseApiArchitecture.Domain;
using BaseApiArchitecture.Implementations;
using BaseApiArchitecture.Interfaces;
using BaseApiArchitecture.Utils;
using Data;
using Data.Implementations;
using Domain.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using PortalChamados.Core.BussinessServices;
using PortalChamados.Core.Interfaces.BussinessServices;

namespace PortalChamados.Core.Configurations
{
	public static class IoC
    {
        public static void RegisterAppServices(IServiceCollection services)
        {
			//services.AddTransient<IEmailSender, EmailSender>();
            services.AddDbContext<PortalContext>();
			services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
			services.AddScoped<IUnitOfWork, UnitOfWork>();

			// Banco de Dados
			services.AddScoped<DbContext, PortalContext>();

			// Serviço de Log
			services.AddScoped<ILogService, LogService>();

			// Strategies
			services.AddScoped<IProcessStrategy, FunctionProcessStrategy>();

			// Bussiness Services
			services.AddScoped<IGerenciarUsuarios, GerenciarUsuario>();

			// Operações de CRUD
			services.RegisterAllConcreteTypes(typeof(IBaseOperations<>), new[] { typeof(Usuario).Assembly, typeof(Startup).Assembly });
			services.RegisterAllGenericTypes(typeof(IBaseOperations<>), typeof(BaseOperationsService<>), new[] { typeof(Usuario).Assembly, typeof(Startup).Assembly });

			// Repositórios 
			services.RegisterAllConcreteTypes(typeof(IRepository<>), new[] { typeof(Usuario).Assembly, typeof(Startup).Assembly });
			services.RegisterAllGenericTypes(typeof(IRepository<>), typeof(Repository<>), new[] { typeof(Usuario).Assembly, typeof(Startup).Assembly });

			// Filtros 
			services.RegisterAllConcreteTypes(typeof(IFilter<>), new[] { typeof(Usuario).Assembly, typeof(Startup).Assembly });
			services.RegisterAllGenericTypes(typeof(IFilter<>), typeof(BaseFilter<>), new[] { typeof(Usuario).Assembly, typeof(Startup).Assembly });
		}
	}
}

