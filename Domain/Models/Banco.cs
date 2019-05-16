using System.Collections.Generic;

namespace Domain.Models
{
	public class Banco : DomainEntity
	{
		public string Nome { get; set; }
		public string Codigo { get; set; }

		public override IEnumerable<string> IsValid()
		{
			throw new System.NotImplementedException();
		}
	}
}