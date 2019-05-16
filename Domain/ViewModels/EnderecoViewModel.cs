using BaseApiArchitecture.Domain;
using Domain.Models;

namespace Domain.ViewModels
{
	public class EnderecoViewModel : BaseEntity
    {
		public string Logradouro { get; set; }
		public short Numero { get; set; }
		public string Bairro { get; set; }
		public string Cidade { get; set; }
		public string Complemento { get; set; }
		public string Cep { get; set; }
		public Estado Estado { get; set; }

		public string EnderecoCompleto { get { return string.Concat($"{Logradouro}, ", Numero == 0 ? "S/N" : Numero.ToString(), $" {Complemento} - {Bairro}, {Cidade} - {Estado?.Sigla} ({Cep})"); } }
	}
}
