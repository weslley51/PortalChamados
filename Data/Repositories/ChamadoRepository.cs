using BaseApiArchitecture.Interfaces;
using Domain.Filters;
using Domain.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static Domain.Utils.Enums;

namespace Data.Repositories
{
	public class ChamadoRepository : Repository<Chamado>
	{
		public ChamadoRepository(DbContext Context) : base(Context)
		{
		}

		public override async Task<Chamado> GetById(int Id)
		{
			return await DbSet
							.Include(x => x.Anexos)
							.Include(x => x.ChamadoPrincipal)
							.Include(x => x.Servico)
							.Include(x => x.Servico.GrupoServico)
							.Include(x => x.Servico.TipoServico)
							.Include(x => x.Solicitante)
							//.Include(x => x.Solicitante.Unidade)
							.Include(x => x.Solucionador)
							//.Include(x => x.Solucionador.Unidade)
							.Include(x => x.Status)
							.FirstOrDefaultAsync(x => x.Id == Id);
		}

		public override async Task<IEnumerable<Chamado>> GetWithFilter(IFilter<Chamado> BaseFilter)
		{
			var Parametros = BaseFilter as ChamadoFilter;

			var Chamados = DbSet
							.Include(x => x.Servico)
							.Include(x => x.Servico.GrupoServico)
							.Include(x => x.Servico.TipoServico)
							.Include(x => x.Solicitante)
							//.Include(x => x.Solicitante.Departamento)
							.Include(x => x.Solucionador)
							//.Include(x => x.Solucionador.Departamento)
							.Include(x => x.Status)
							.Where
							(
								x =>
									(!Parametros.Servico.HasValue || x.Servico.Id == Parametros.Servico) &&
									(!Parametros.GrupoServico.HasValue || x.Servico.GrupoServico.Id == Parametros.GrupoServico) &&
									(!Parametros.Solicitante.HasValue || x.Solicitante.Id == Parametros.Solicitante) &&
									(!Parametros.Solucionador.HasValue || x.Solucionador.Id == Parametros.Solucionador) &&
									(!Parametros.Status.HasValue || x.Status.Id == Parametros.Status) &&
									(!Parametros.Departamento.HasValue || x.Servico.GrupoServico.Departamento.Id == Parametros.Departamento) &&
									(!Parametros.Fechado.HasValue || x.DataFechamento.HasValue == Parametros.Fechado.Value) &&
									(string.IsNullOrEmpty(Parametros.Titulo) || x.Titulo.Contains(Parametros.Titulo))
							);

			if (Parametros.Situacao.HasValue)
			{
				switch ((SLA)Parametros.Situacao)
				{
					case SLA.Finalizado:
						Chamados = Fechados(Chamados, Parametros.Fechado.Value);
						break;
					case SLA.Parado:
						var Status = new int[] { 1, 2, 3 };
						Chamados = Chamados.Where(x => Status.Contains(x.Status.Id));
						break;
					case SLA.Atrasado:
						Chamados = Fechados(Chamados, false).Where(x => x.DataFimPrazo < DateTime.Now);
						break;
					case SLA.DentroPrazo:
						Chamados = Fechados(Chamados, true).Where(x => x.DataFimPrazo > DateTime.Now);
						break;
					default:
						break;
				}
			}

			return await Chamados.ToListAsync();
		}

		private IQueryable<Chamado> Fechados(IQueryable<Chamado> Chamados, bool Fechado)
		{
			if (Fechado)
				return Chamados.Where(x => x.DataFechamento.HasValue);
			else
				return Chamados.Where(x => !x.DataFechamento.HasValue);
		}
	}
}
