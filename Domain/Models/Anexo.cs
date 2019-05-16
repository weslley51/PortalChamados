using BaseApiArchitecture.Domain;
using System.Collections.Generic;

namespace Domain.Models
{
	public class Anexo : DomainEntity
	{
		public string Caminho { get; set; }

		public override IEnumerable<string> IsValid()
		{
			throw new System.NotImplementedException();
		}
	}
}
