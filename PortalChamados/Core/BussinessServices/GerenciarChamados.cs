using AutoMapper;
using BaseApiArchitecture.Domain;
using BaseApiArchitecture.Implementations;
using BaseApiArchitecture.Interfaces;
using BaseApiArchitecture.Utils;
using Domain.Models;
using Microsoft.Extensions.Options;
using PortalChamados.Core.Configurations;
using PortalChamados.Core.Interfaces.BussinessServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using static Domain.Utils.Enums;

namespace PortalChamados.Core.BussinessServices
{
	public class GerenciarChamados : BaseOperationsService<Chamado>, IGerenciarChamados
	{
		private readonly IMapper Mapper;
		private readonly ClaimsPrincipal Principal;
		private readonly IRepository<Status> StatusRepository;
		private readonly IRepository<Usuario> UsuarioRepository;
		private readonly IRepository<Servico> ServicoRepository;

		public GerenciarChamados(ClaimsPrincipal Principal, IRepository<Usuario> UsuarioRepository, IRepository<Status> StatusRepository, IRepository<Servico> ServicoRepository, 
			IRepository<Chamado> Repository, IProcessStrategy ProcessStrategy, IUnitOfWork UnitOfWork, ILogService LogService) : 
			base(Repository, ProcessStrategy, UnitOfWork, LogService)
		{
			this.Principal = Principal;
			this.StatusRepository = StatusRepository;
			this.ServicoRepository = ServicoRepository;
			this.UsuarioRepository = UsuarioRepository;
		}

		public Task<IEnumerable<Result<Chamado>>> Finalizar(params Chamado[] Entities)
		{
			throw new NotImplementedException();
		}

		public async Task<IEnumerable<Result<Chamado>>> Novo(params Chamado[] Entities)
		{
			var Results = new List<Result<Chamado>>();

			foreach (var Entity in Entities)
			{
				var Erros = new List<string>();
				var Solicitante = await UsuarioRepository.GetById(Convert.ToInt32(Principal.GetClaim("Id")));

				Erros.AddRange(Entity.IsValid());

				if (Erros.Count > 0)
				{
					Erros.Add(await this.Validate(Entity, Solicitante, UsuarioRepository));
					Erros.Add(await this.Validate(Entity, Entity.Status, StatusRepository));
					Erros.Add(await this.Validate(Entity, Entity.Servico, ServicoRepository));

					if (Entity.ChamadoPrincipal != null && Entity.ChamadoPrincipal.Id > 0)
						Erros.Add(await this.Validate(Entity, Entity.ChamadoPrincipal, Repository));
				}

				Results.Add(new Result<Chamado>(Entity, Erros.Count > 0, Erros.ToArray()));
			}

			return Results;
		}
	}
}
