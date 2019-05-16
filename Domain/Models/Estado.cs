using BaseApiArchitecture.Domain;
using System.Collections.Generic;

namespace Domain.Models
{
	public class Estado : DomainEntity
    {
		public string Nome { get; set; }
		public string Sigla { get; set; }

		public override IEnumerable<string> IsValid()
		{
			throw new System.NotImplementedException();
		}
	}
}
