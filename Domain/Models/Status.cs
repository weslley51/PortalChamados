﻿using System.Collections.Generic;
using BaseApiArchitecture.Domain;

namespace Domain.Models
{
	public class Status : DomainEntity
    {
		public string Nome { get; set; }

		public override IEnumerable<string> IsValid()
		{
			throw new System.NotImplementedException();
		}
	}
}
