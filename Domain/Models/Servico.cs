using BaseApiArchitecture.Domain;
using System.Collections.Generic;

namespace Domain.Models
{
	public class Servico : DomainEntity
    {
		public string Nome { get; set; }
		public string Descricao { get; set; }	
		public short Prazo { get; set; }
		public TipoServico TipoServico { get; set; }
		public GrupoServico GrupoServico { get; set; }

		public override IEnumerable<string> IsValid()
		{
			throw new System.NotImplementedException();
		}
	}
}
