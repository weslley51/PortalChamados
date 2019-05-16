using BaseApiArchitecture.Domain;
using System.Collections.Generic;

namespace Domain.Models
{
	public class PermissaoFuncionalidade : DomainEntity
	{
		public bool? Salvar { get; set; }
		public bool? Alterar { get; set; }
		public bool? Deletar { get; set; }
		public bool? Consultar { get; set; }
		public int PermissaoId { get; set; }
		public int FuncionalidadeId { get; set; }
		public Permissao Permissao { get; set; }
		public Funcionalidade Funcionalidade { get; set; }

		public override IEnumerable<string> IsValid()
		{
			throw new System.NotImplementedException();
		}
	}
}