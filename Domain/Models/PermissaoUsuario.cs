using System.Collections.Generic;
using BaseApiArchitecture.Domain;

namespace Domain.Models
{
	public class PermissaoUsuario : DomainEntity
    {
		public int UsuarioId { get; set; }
		public int PermissaoId { get; set; }
		public Permissao Permissao { get; set; }
		public Usuario Usuario { get; set; }

		public override IEnumerable<string> IsValid()
		{
			throw new System.NotImplementedException();
		}
	}
}
