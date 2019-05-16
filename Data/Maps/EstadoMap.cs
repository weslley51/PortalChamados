using Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.Maps
{
	public class EstadoMap : EntityTypeConfiguration<Estado>
	{
		public override void Map(EntityTypeBuilder<Estado> Builder)
		{
			Builder.ToTable("Estados");
			Builder.HasKey(x => x.Id);

			Builder.Property(x => x.Nome).IsRequired(true);
			Builder.Property(x => x.Sigla).IsRequired(true).HasMaxLength(2);
		}
	}
}
