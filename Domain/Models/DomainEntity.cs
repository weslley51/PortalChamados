using BaseApiArchitecture.Domain;
using System.Collections.Generic;

namespace Domain.Models
{
	public abstract class DomainEntity : BaseEntity
	{
		public abstract IEnumerable<string> IsValid();
	}
}
