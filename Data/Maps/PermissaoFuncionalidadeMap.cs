using Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.Maps
{
	public class PermissaoFuncionalidadeMap : EntityTypeConfiguration<PermissaoFuncionalidade>
	{
		public override void Map(EntityTypeBuilder<PermissaoFuncionalidade> Builder)
		{
			Builder.ToTable("PermissoesFuncionalidades");

			Builder.HasKey(x => new { x.PermissaoId, x.FuncionalidadeId });

			Builder.Ignore(x => x.Id);

			Builder.Property(x => x.Salvar).IsRequired(true);
			Builder.Property(x => x.Alterar).IsRequired(true);
			Builder.Property(x => x.Deletar).IsRequired(true);
			Builder.Property(x => x.Consultar).IsRequired(true);			

			Builder
				.HasOne(x => x.Permissao)
				.WithMany(x => x.PermissaoFuncionalidades)
				.HasForeignKey(x => x.PermissaoId)
				.IsRequired(true);

			Builder
				.HasOne(x => x.Funcionalidade)
				.WithMany()
				.HasForeignKey(x => x.FuncionalidadeId)
				.IsRequired(true);
		}
	}
}
