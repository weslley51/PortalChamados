using Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.Maps
{
	public class FuncionalidadeMap : EntityTypeConfiguration<Funcionalidade>
	{
		public override void Map(EntityTypeBuilder<Funcionalidade> Builder)
		{
			Builder.ToTable("Funcionalidades");

			Builder.HasKey(x => x.Id);

			Builder.Property(x => x.Nome).IsRequired(true).HasMaxLength(100);
		}
	}
}
