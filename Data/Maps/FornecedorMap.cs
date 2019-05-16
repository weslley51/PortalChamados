using Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.Maps
{
	public class FornecedorMap : EntityTypeConfiguration<Fornecedor>
	{
		public override void Map(EntityTypeBuilder<Fornecedor> Builder)
		{
			Builder.ToTable("Fornecedores");
			Builder.HasKey(x => x.Id);

			Builder.Property(x => x.PessoaJuridica).IsRequired(true);
			Builder.Property(x => x.NomeFantasia).IsRequired(true).HasMaxLength(100);
			Builder.Property(x => x.DocumentoPrimario).IsRequired(true).HasMaxLength(14);
			Builder.Property(x => x.NomeCompletoRazaoSocial).IsRequired(true).HasMaxLength(250);

			Builder.Property(x => x.DocumentoSecundario).IsRequired(false).HasMaxLength(15);

			Builder
				.HasOne(x => x.Endereco)
				.WithMany()
				.HasForeignKey("EnderecoId")
				.IsRequired(false);

			Builder
				.HasMany(x => x.Contas)
				.WithOne()
				.HasForeignKey("FornecedorId")
				.IsRequired(true);

			Builder
				.HasMany(x => x.Atividades)
				.WithOne()
				.HasForeignKey("FornecedorId")
				.IsRequired(true);

			Builder
				.HasMany(x => x.Contatos)
				.WithOne()
				.HasForeignKey("FornecedorId")
				.IsRequired(true);
		}
	}
}
