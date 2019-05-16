using System.Collections.Specialized;
using BaseApiArchitecture.Utils;
using Domain.Models;
using BaseApiArchitecture.Domain;
using System;

namespace Domain.Filters
{
	public class ChamadoFilter : BaseFilter<Chamado>
	{
		public int? Servico { get; set; }
		public int? GrupoServico { get; set; }
		public int? Solicitante { get; set; }
		public int? Solucionador { get; set; }
		public int? Status { get; set; }
		public int? Situacao { get; set; }
		public int? Departamento { get; set; }
		public bool? Fechado { get; set; }
		public DateTime? Inicio { get; set; }
		public DateTime? Fim { get; set; }
		public string Titulo { get; set; }

		public override void Initialize(NameValueCollection Parameters)
		{
			Servico = Parameters.GetParameter<int>("Servico");
			GrupoServico = Parameters.GetParameter<int>("GrupoServico");
			Solicitante = Parameters.GetParameter<int>("Solicitante");
			Solucionador = Parameters.GetParameter<int>("Solucionador");
			Status = Parameters.GetParameter<int>("Status");
			Situacao = Parameters.GetParameter<int>("Situacao");
			Departamento = Parameters.GetParameter<int>("Departamento");
			Fechado = Parameters.GetParameter<bool>("Fechado");
			Inicio = Parameters.GetParameter<DateTime>("Inicio");
			Fim = Parameters.GetParameter<DateTime>("Fim");
			Titulo = Parameters.Get("Titulo");
			base.Initialize(Parameters);
		}
	}
}
