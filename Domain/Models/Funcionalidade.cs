using BaseApiArchitecture.Domain;
using System.Collections.Generic;

namespace Domain.Models
{
	public class Funcionalidade : DomainEntity
	{
		public string Nome { get; set; }

		public override IEnumerable<string> IsValid()
		{
			throw new System.NotImplementedException();
		}
	}
}