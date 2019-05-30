using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using BaseApiArchitecture.Interfaces;
using BaseApiArchitecture.Domain;
using Domain.Models;

namespace Data
{
	public class Repository<T> : IRepository<T> where T : DomainEntity
    {
		private DbContext Context { get; set; }
		protected DbSet<T> DbSet { get; set; }
		
		public Repository(DbContext Context)
        {
			this.Context = Context;
			this.DbSet = Context.Set<T>();
        }

        public virtual async Task Delete(params T[] Entities)
        {
			var Ids = Entities.Select(x => x.Id);
			var Excluded = await DbSet.Where(x => Ids.Contains(x.Id)).ToListAsync();
			DbSet.RemoveRange(Excluded);
            //return Excluded;
        }

        public virtual async Task<T> GetById(T Entity)
        {
			if (Entity != null)
				return await DbSet.FindAsync(Entity);
			else
				return null;
        }

        public virtual async Task Insert(params T[] Entities)
        {
            await DbSet.AddRangeAsync(Entities);
            //return Entities;
        }

        public virtual async Task Update(params T[] Entities)
        {
            foreach (var Entity in Entities)
                Context.Entry(Entity).State = EntityState.Modified;

            //return Entities;
        }

		public virtual async Task<IEnumerable<T>> GetWithFilter(IFilter<T> BaseFilter)
		{
			throw new NotImplementedException();
		}

		public async Task<IEnumerable<T>> GetWithFilter(Expression<Func<T, bool>> Predicate = null, bool Readonly = true, int? Page = 1, int? Quantity = 10, params Expression<Func<T, object>>[] Includes)
        {
			IQueryable<T> Set = DbSet;

			foreach (var Include in Includes)
				Set = DbSet.Include(Include);

			if (Readonly)
                Set = Set.AsNoTracking();

			if (Predicate != null)
				Set = Set.Where(Predicate);

			if (Page.HasValue && Quantity.HasValue)
				Set = Set.Skip((Page.Value - 1) * Quantity.Value).Take(Quantity.Value);

			return await Set.ToListAsync();
        }

		public void Dispose()
		{
			GC.SuppressFinalize(this);
		}
	}
}
