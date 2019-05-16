using Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.Maps
{
	public class AtividadeMap : EntityTypeConfiguration<Atividade>
	{
		public override void Map(EntityTypeBuilder<Atividade> Builder)
		{
			Builder.ToTable("Atividades");
			Builder.HasKey(x => x.Id);

			Builder.Property(x => x.Nome).IsRequired(true);
		}
	}
}
