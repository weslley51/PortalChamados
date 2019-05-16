using BaseApiArchitecture.Domain;
using System.Collections.Generic;

namespace Domain.Models
{
	public class Conta : DomainEntity
    {
		public string Nome { get; set; }
		public string Numero { get; set; }
		public string Digito1 { get; set; }
		public string Digito2 { get; set; }
		public Agencia Agencia { get; set; }

		public override IEnumerable<string> IsValid()
		{
			throw new System.NotImplementedException();
		}
	}
}
