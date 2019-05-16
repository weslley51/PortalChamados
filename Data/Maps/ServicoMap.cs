using Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.Maps
{
	public class ServicoMap : EntityTypeConfiguration<Servico>
	{
		public override void Map(EntityTypeBuilder<Servico> Builder)
		{
			Builder.ToTable("Servicos");

			Builder.HasKey(x => x.Id);

			Builder.Property(x => x.Nome).IsRequired(true);
			Builder.Property(x => x.Prazo).IsRequired(true);
			Builder.Property(x => x.Descricao).IsRequired(false).HasMaxLength(250);
			
			Builder
				.HasOne(x => x.TipoServico)
				.WithMany()
				.HasForeignKey("TipoServicoId")
				.IsRequired(true);

			Builder
				.HasOne(x => x.GrupoServico)
				.WithMany()
				.HasForeignKey("GrupoServicoId")
				.IsRequired(true);
		}
	}
}
