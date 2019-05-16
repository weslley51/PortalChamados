using Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.Maps
{
	public class ChamadoMap : EntityTypeConfiguration<Chamado>
	{
		public override void Map(EntityTypeBuilder<Chamado> Builder)
		{
			Builder.ToTable("Chamados");

			Builder.HasKey(x => x.Id);

			Builder.Property(x => x.Titulo).IsRequired(true);
			Builder.Property(x => x.Prioridade).IsRequired(true);
			Builder.Property(x => x.DataFimPrazo).IsRequired(true);
			Builder.Property(x => x.DataSolicitacao).IsRequired(true);
			Builder.Property(x => x.Telefone).IsRequired(true).HasMaxLength(11);
			Builder.Property(x => x.Descricao).IsRequired(true).HasMaxLength(500);

			Builder.Property(x => x.DataFechamento).IsRequired(false);
			Builder.Property(x => x.NotaAtendimento).IsRequired(false);

			Builder
				.HasOne(x => x.Status)
				.WithMany()
				.HasForeignKey("StatusId")
				.IsRequired(true);

			Builder
				.HasOne(x => x.Servico)
				.WithMany()
				.HasForeignKey("ServicoId")
				.IsRequired(true);

			Builder
				.HasOne(x => x.Solicitante)
				.WithMany()
				.HasForeignKey("SolicitanteId")
				.IsRequired(true)
				.OnDelete(DeleteBehavior.Restrict);

			Builder.HasOne(x => x.Solucionador)
				.WithMany()
				.HasForeignKey("SolucionadorId")
				.IsRequired(false)
				.OnDelete(DeleteBehavior.Restrict);
		}
	}
}
