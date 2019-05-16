using Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.Maps
{
	public class PermissaoMap : EntityTypeConfiguration<Permissao>
	{
		public override void Map(EntityTypeBuilder<Permissao> Builder)
		{
			Builder.ToTable("Permissoes");

			Builder.HasKey(x => x.Id);

			Builder.Property(x => x.Nome).IsRequired(true);
			Builder.Property(x => x.Descricao).IsRequired(false).HasMaxLength(250);
		}
	}
}
