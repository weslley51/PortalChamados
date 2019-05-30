using BaseApiArchitecture.Domain;
using System.Collections.Generic;

namespace Domain.Models
{
	public abstract class DomainEntity : BaseEntity
	{
		public int Id { get; set; }
		public abstract IEnumerable<string> IsValid();
	}
}
