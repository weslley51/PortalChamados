using Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.Maps
{
	public class AnexoMap : EntityTypeConfiguration<Anexo>
	{
		public override void Map(EntityTypeBuilder<Anexo> Builder)
		{
			Builder.ToTable("Anexos");

			Builder.HasKey(x => x.Id);

			Builder.Property(x => x.Caminho).IsRequired(true).HasMaxLength(250);
		}
	}
}
