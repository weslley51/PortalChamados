using BaseApiArchitecture.Domain;
using BaseApiArchitecture.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using static Domain.Utils.Enums;

namespace Domain.Models
{
	public class Chamado : DomainEntity
	{
		public string Descricao { get; set; }
		public string Titulo { get; set; }
		public string Telefone { get; set; }
		public DateTime? DataSolicitacao { get; private set; }
		public DateTime? DataFimPrazo { get; private set; }
		public DateTime? DataFechamento { get; private set; }
		public DateTime? DataAceiteFechamento { get; private set; }
		public Prioridade Prioridade { get; private set; }
		public Nota? NotaAtendimento { get; set; }
		public Servico Servico { get; set; }
		public Status Status { get; private set; }
		public Usuario Solicitante { get; set; }
		public Usuario Solucionador { get; set; }
		public Chamado ChamadoPrincipal { get; set; }
		public ICollection<Anexo> Anexos { get; set; }

		public override IEnumerable<string> IsValid()
		{
			var Erros = new List<string>();

			if (!Titulo.IsGreatenThan(5))
				Erros.Add("Titulo deve ser preenchido e deve ser maior que 5!");

			if (!Telefone.IsGreatenThan(4))
				Erros.Add("Telefone deve ser preenchido e deve ser maior que 4!");

			if (!Descricao.IsGreatenThan(5))
				Erros.Add("Descrição deve ser preenchida e deve ser maior que 5!");

			if (Servico == null || Servico.Id <= 0)
				Erros.Add("Serviço deve ser preenchido!");

			if (Solucionador == null || Solucionador.Id <= 0)
				Erros.Add("Solucionador deve ser preenchido!");

			if (ChamadoPrincipal != null && ChamadoPrincipal.Id <= 0)
				Erros.Add("Chamado Principal não é uma referência válida!");

			if (Erros.Count <= 0)
			{
				if (!DataSolicitacao.HasValue)
					DataSolicitacao = DateTime.Now;

				CalcularPrazo();
			}

			return Erros;
		}

		public void SetarAlteracoes(Chamado Entity)
		{
			if (!DataAceiteFechamento.HasValue || !DataFechamento.HasValue)
			{
				Descricao = Entity.Descricao;
				Titulo = Entity.Titulo;
				Telefone = Entity.Telefone;
				Solucionador = Entity.Solucionador;
			}

			CalcularPrazo();
		}

		public void SolicitarFechamento()
		{
			DataFechamento = DateTime.Now;
			CalcularPrazo();
		}

		public void ResponderSolicitacaoFechamento(bool Aceito)
		{
			if (Aceito)
				DataAceiteFechamento = DateTime.Now;
			else
				DataFechamento = null;

			CalcularPrazo();			
		}

		private void CalcularPrazo()
		{
			var Prazo = Servico.Prazo;

			while (Prazo > 0)
			{
				DataFimPrazo = (DataFimPrazo.HasValue ? DataFimPrazo.Value : DateTime.Now).AddDays(1);

				if (!new DayOfWeek[] { DayOfWeek.Sunday, DayOfWeek.Saturday }.Contains(DataFimPrazo.Value.DayOfWeek))
					Prazo--;
			}

			VerificarStatus();
		}

		private void VerificarStatus()
		{
			if (DataFechamento.HasValue)
				Status = new Status { Id = DataAceiteFechamento.HasValue ? ((int)SLA.Finalizado) : ((int)SLA.Parado) };
			else
			{
				if (DataFimPrazo?.Date == DateTime.Now.Date)
					Status = new Status { Id = ((int)SLA.VenceHoje) };

				if (DataFimPrazo?.Date > DateTime.Now.Date)
					Status = new Status { Id = ((int)SLA.DentroPrazo) };

				if (DataFimPrazo?.Date < DateTime.Now.Date)
					Status = new Status { Id = ((int)SLA.Atrasado) };
			}
		}
	}
}
