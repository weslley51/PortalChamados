using BaseApiArchitecture.Domain;
using System.Collections.Generic;
using System.Linq;

namespace Domain.Models
{
	public class Fornecedor : DomainEntity
    {
		public bool? PessoaJuridica { get; set; }
		public string NomeCompletoRazaoSocial { get; set; }
		public string NomeFantasia { get; set; }
		public string DocumentoPrimario { get; set; }
		public string DocumentoSecundario { get; set; }
		public Endereco Endereco { get; set; }
		public ICollection<Conta> Contas { get; set; }
		public ICollection<Atividade> Atividades { get; set; }
		public ICollection<Contato> Contatos { get; set; }

		public override IEnumerable<string> IsValid()
		{
			throw new System.NotImplementedException();
		}
	}
}
