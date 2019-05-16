using BaseApiArchitecture.Domain;
using System.Collections.Generic;

namespace Domain.Models
{
	public class Contato : DomainEntity
    {
		public bool? Email { get; set; }
		public string Valor { get; set; }
		public string Responsavel { get; set; }
		public string Observacoes { get; set; }

		public override IEnumerable<string> IsValid()
		{
			throw new System.NotImplementedException();
		}
	}
}
