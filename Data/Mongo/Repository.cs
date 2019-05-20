using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq.Expressions;
using System.Linq;
using BaseApiArchitecture.Interfaces;
using BaseApiArchitecture.Domain;
using MongoDB.Driver;

namespace Data.Mongo
{
	public class Repository<T> : IRepository<T> where T : BaseEntity
    {
		private IMongoDatabase Context { get; set; }
		protected IMongoCollection<T> DbSet { get; set; }
		
		public Repository(IUnitOfWork UnitOfWork)
        {
			this.Context = (UnitOfWork as UnitOfWork).Context;
			DbSet = Context.GetCollection<T>("listingsAndReviews");
        }

        public virtual async Task<IEnumerable<T>> Delete(params int[] Ids)
        {
			var Excluded = await DbSet.FindAsync(x => Ids.Contains(x.Id));
			await DbSet.DeleteManyAsync(x => Ids.Contains(x.Id));
			return await Excluded.ToListAsync();
        }

        public virtual async Task<T> GetById(int Id)
        {
            return await (await DbSet.FindAsync(X => X.Id.ToString() == Id.ToString())).FirstOrDefaultAsync();
        }

        public virtual async Task<IEnumerable<T>> Insert(params T[] Entities)
        {
            await DbSet.InsertManyAsync(Entities);
            return Entities;
        }

        public virtual async Task<IEnumerable<T>> Update(params T[] Entities)
        {
            foreach (var Entity in Entities)
				await DbSet.ReplaceOneAsync(x => x.Id == Entity.Id, Entity);

			return Entities;
        }

		public virtual async Task<IEnumerable<T>> GetWithFilter(IFilter<T> BaseFilter)
		{
			throw new NotImplementedException();
		}

		public async Task<IEnumerable<T>> GetWithFilter(Expression<Func<T, bool>> Predicate = null, bool ReadOnly = true, int? Page = 1, int? Quantity = 10, params Expression<Func<T, object>>[] Includes)
        {
			IQueryable<T> Set = DbSet.AsQueryable();
			Set.Where(Predicate);
			
			if (Page.HasValue && Quantity.HasValue)
				Set = Set.Skip((Page.Value - 1) * Quantity.Value).Take(Quantity.Value);

			return Set.ToList();
        }

		public void Dispose()
		{
			GC.SuppressFinalize(this);
		}
	}
}
