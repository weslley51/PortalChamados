using Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.Maps
{
	public class TipoServicoMap : EntityTypeConfiguration<TipoServico>
	{
		public override void Map(EntityTypeBuilder<TipoServico> Builder)
		{
			Builder.ToTable("TiposServico");

			Builder.HasKey(x => x.Id);

			Builder.Property(x => x.Nome).IsRequired(true);
		}
	}
}
