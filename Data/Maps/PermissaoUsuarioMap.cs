using Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.Maps
{
	public class PermissaoUsuarioMap : EntityTypeConfiguration<PermissaoUsuario>
	{
		public override void Map(EntityTypeBuilder<PermissaoUsuario> Builder)
		{
			Builder.ToTable("PermissoesUsuarios");

			Builder.HasKey(x => new { x.UsuarioId, x.PermissaoId });

			Builder.Ignore(x => x.Id);

			Builder
				.HasOne(x => x.Permissao)
				.WithMany()
				.HasForeignKey(x => x.PermissaoId)
				.IsRequired(true);

			Builder
				.HasOne(x => x.Usuario)
				.WithMany(X => X.PermissoesUsuario)
				.HasForeignKey(x => x.UsuarioId)
				.IsRequired(true); 
		}
	}
}
