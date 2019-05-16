using System.Collections.Generic;

namespace Domain.Models
{
	public class Agencia : DomainEntity
	{
		public string Nome { get; set; }
		public string Numero { get; set; }
		public string Digito1 { get; set; }
		public string Digito2 { get; set; }
		public Banco Banco { get; set; }

		public override IEnumerable<string> IsValid()
		{
			throw new System.NotImplementedException();
		}
	}
}