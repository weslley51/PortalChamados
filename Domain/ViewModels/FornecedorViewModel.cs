using BaseApiArchitecture.Domain;
using Domain.Models;
using System.Collections.Generic;

namespace Domain.ViewModels
{
	public class FornecedorViewModel : BaseEntity
	{
		public bool? PessoaJuridica { get; set; }
		public string NomeCompletoRazaoSocial { get; set; }
		public string NomeFantasia { get; set; }
		public string DocumentoPrimario { get; set; }
		public string DocumentoSecundario { get; set; }
		public EnderecoViewModel Endereco { get; set; }
		public IEnumerable<Conta> Contas { get; set; }
		public IEnumerable<Atividade> Atividades { get; set; }
		public IEnumerable<Contato> Emails { get; set; }
		public IEnumerable<Contato> Telefones { get; set; }
	}
}
