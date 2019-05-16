using Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.Maps
{
	public class AgenciaMap : EntityTypeConfiguration<Agencia>
	{
		public override void Map(EntityTypeBuilder<Agencia> Builder)
		{
			Builder.ToTable("Agencias");

			Builder.HasKey(x => x.Id);

			Builder.Property(x => x.Nome).IsRequired(true);
			Builder.Property(x => x.Numero).IsRequired(true).HasMaxLength(5);
			Builder.Property(x => x.Digito1).IsRequired(false).HasMaxLength(1);
			Builder.Property(x => x.Digito2).IsRequired(false).HasMaxLength(1);

			Builder
				.HasOne(x => x.Banco)
				.WithMany()
				.HasForeignKey("BancoId")
				.IsRequired(true);
		}
	}
}
