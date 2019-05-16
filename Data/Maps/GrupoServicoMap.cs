using Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.Maps
{
	public class GrupoServicoMap : EntityTypeConfiguration<GrupoServico>
	{
		public override void Map(EntityTypeBuilder<GrupoServico> Builder)
		{
			Builder.ToTable("GruposServicos");

			Builder.HasKey(x => x.Id);

			Builder.Property(x => x.Nome).IsRequired(true).HasMaxLength(100);
			Builder.Property(x => x.Descricao).IsRequired(false).HasMaxLength(250);

			Builder
				.HasOne(X => X.Departamento)
				.WithMany()
				.HasForeignKey("DepartamentoId")
				.IsRequired(true); 
		}
	}
}
