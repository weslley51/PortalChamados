using Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.Maps
{
	public class EnderecoMap : EntityTypeConfiguration<Endereco>
	{
		public override void Map(EntityTypeBuilder<Endereco> Builder)
		{
			Builder.ToTable("Enderecos");

			Builder.HasKey(x => x.Id);

			Builder.Property(x => x.Cep).IsRequired(true).HasMaxLength(8);
			Builder.Property(x => x.Bairro).IsRequired(true).HasMaxLength(100);
			Builder.Property(x => x.Cidade).IsRequired(true).HasMaxLength(100);
			Builder.Property(x => x.Logradouro).IsRequired(true).HasMaxLength(100);

			Builder.Property(x => x.Numero).IsRequired(false);
			Builder.Property(x => x.Complemento).IsRequired(false);

			Builder
				.HasOne(x => x.Estado)
				.WithMany()
				.HasForeignKey("EstadoId")
				.IsRequired(true);
		}
	}
}
