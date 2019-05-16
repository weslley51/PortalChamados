using Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.Maps
{
	public class ContatoMap : EntityTypeConfiguration<Contato>
	{
		public override void Map(EntityTypeBuilder<Contato> Builder)
		{
			Builder.ToTable("Contatos");

			Builder.HasKey(x => x.Id);

			Builder.Property(x => x.Email).IsRequired(true);
			Builder.Property(x => x.Valor).IsRequired(true);
			Builder.Property(x => x.Responsavel).IsRequired(true);
			Builder.Property(x => x.Observacoes).IsRequired(true).HasMaxLength(100);
		}
	}
}
