using Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.Maps
{
	public class DepartamentoMap : EntityTypeConfiguration<Departamento>
	{
		public override void Map(EntityTypeBuilder<Departamento> Builder)
		{
			Builder.ToTable("Departamentos");

			Builder.HasKey(x => x.Id);

			Builder.Property(x => x.Sigla).IsRequired(true).HasMaxLength(5);
			Builder.Property(x => x.Nome).IsRequired(true).HasMaxLength(100);
		}
	}
}
