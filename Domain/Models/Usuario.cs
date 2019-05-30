using BaseApiArchitecture.Domain;
using BaseApiArchitecture.Utils;
using System;
using System.Collections.Generic;

namespace Domain.Models
{
	public class Usuario : DomainEntity
    {
		public bool? AlterarSenha { get; set; }
		public string Login { get; set; }
        public string Senha { get; set; }
		public string Salt { get; set; }
		public string NomeCompleto { get; set; }
		public Departamento Departamento { get; set; }
		public ICollection<PermissaoUsuario> PermissoesUsuario { get; set; }

		public override IEnumerable<string> IsValid()
		{
			throw new System.NotImplementedException();
		}

		public void ResetarSenha()
		{
			AlterarSenha = true;
			Senha = Criptography.GetHash($"PortalChamados{DateTime.Now.Year}", Salt);
		}
	}
}
