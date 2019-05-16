using BaseApiArchitecture.Domain;
using System.Collections.Generic;

namespace Domain.Models
{
	public class Endereco : DomainEntity
    {
		public string Logradouro { get; set; }
		public short? Numero { get; set; }
		public string Bairro { get; set; }
		public string Cidade { get; set; }
		public string Complemento { get; set; }
		public string Cep { get; set; }
		public Estado Estado { get; set; }

		public override IEnumerable<string> IsValid()
		{
			throw new System.NotImplementedException();
		}
	}
}
