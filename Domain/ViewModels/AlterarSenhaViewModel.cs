using BaseApiArchitecture.Domain;

namespace Domain.ViewModels
{
	public class AlterarSenhaViewModel : BaseEntity
    {
		public string Login { get; set; }
		public string Senha { get; set; }
		public string NovaSenha { get; set; }
		public string ConfirmacaoNovaSenha { get; set; }
	}
}
