using Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.Maps
{
	public class BancoMap : EntityTypeConfiguration<Banco>
	{
		public override void Map(EntityTypeBuilder<Banco> Builder)
		{
			Builder.ToTable("Bancos");

			Builder.HasKey(x => x.Id);

			Builder.Property(x => x.Nome).IsRequired(true);
			Builder.Property(x => x.Codigo).IsRequired(true).HasMaxLength(5);
		}
	}
}
