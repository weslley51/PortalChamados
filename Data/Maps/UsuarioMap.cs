using Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.Maps
{
	public class UsuarioMap : EntityTypeConfiguration<Usuario>
	{
		public override void Map(EntityTypeBuilder<Usuario> Builder)
		{
			Builder.ToTable("Usuarios");

			Builder.HasKey(x => x.Id);

			Builder.Property(x => x.Senha).IsRequired(true);
			Builder.Property(x => x.AlterarSenha).IsRequired(true).HasDefaultValue(true); 
			Builder.Property(x => x.Login).IsRequired(true).HasMaxLength(20);
			Builder.Property(x => x.NomeCompleto).IsRequired(true).HasMaxLength(150);

			Builder
				.HasOne(x => x.Departamento)
				.WithMany()
				.HasForeignKey("DepartamentoId")
				.IsRequired(true);
		}
	}
}
