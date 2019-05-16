using Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.Maps
{
	public class ContaMap : EntityTypeConfiguration<Conta>
	{
		public override void Map(EntityTypeBuilder<Conta> Builder)
		{
			Builder.ToTable("Contas");

			Builder.HasKey(x => x.Id);

			Builder.Property(x => x.Nome).IsRequired(true);
			Builder.Property(x => x.Numero).IsRequired(true).HasMaxLength(15);
			Builder.Property(x => x.Digito1).IsRequired(false).HasMaxLength(1);;
			Builder.Property(x => x.Digito2).IsRequired(false).HasMaxLength(1); ;

			Builder
				.HasOne(x => x.Agencia)
				.WithMany()
				.HasForeignKey("AgenciaId")
				.IsRequired(true);
		}
	}
}
