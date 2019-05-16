using BaseApiArchitecture.Domain;
using System.Collections.Generic;

namespace Domain.Models
{
	public class GrupoServico : DomainEntity
    {
		public string Nome { get; set; }
		public string Descricao { get; set; }
		public Departamento Departamento { get; set; }

		public override IEnumerable<string> IsValid()
		{
			throw new System.NotImplementedException();
		}
	}
}
