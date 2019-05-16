using Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.Maps
{
	public class StatusMap : EntityTypeConfiguration<Status>
	{
		public override void Map(EntityTypeBuilder<Status> Builder)
		{
			Builder.ToTable("Status");

			Builder.HasKey(x => x.Id);

			Builder.Property(x => x.Nome).IsRequired(true);
		}
	}
}
