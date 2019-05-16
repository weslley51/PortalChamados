using BaseApiArchitecture.Domain;
using Domain.Models;
using System;
using System.Collections.Generic;
using static Domain.Utils.Enums;

namespace Domain.ViewModels
{
	public class ChamadoViewModel : BaseEntity
    {
		public string Descricao { get; set; }
		public string Titulo { get; set; }
		public string Telefone { get; set; }
		public DateTime? DataSolicitacao { get; set; }
		public DateTime? DataFimPrazo { get; set; }
		public DateTime? DataFechamento { get; set; }
		public Prioridade Prioridade { get; set; }
		public Nota NotaAtendimento { get; set; }
		public SLA SLA { get; set; }
		public Servico Servico { get; set; }
		public Status Status { get; set; }
		public Usuario Solicitante { get; set; }
		public Usuario Solucionador { get; set; }
		public IEnumerable<Anexo> Anexos { get; set; }
		public IEnumerable<Chamado> ChamadosAssociados { get; set; }
	}
}
