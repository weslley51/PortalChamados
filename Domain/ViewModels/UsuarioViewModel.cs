using BaseApiArchitecture.Domain;
using Domain.Models;
using System.Collections.Generic;

namespace Domain.ViewModels
{
	public class UsuarioViewModel : BaseEntity
    {
		public string Login { get; set; }
		public string Token { get; set; }
		public string NomeCompleto { get; set; }
		public IEnumerable<Permissao> Permissoes { get; set; }
	}
}
