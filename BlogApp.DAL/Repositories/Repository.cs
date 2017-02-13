using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using BlogApp.DAL.Interfaces;
using System.Data.Entity;
using BlogApp.DAL.EF;

namespace BlogApp.DAL.Repositories
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : class
    {
        protected readonly AppContext context;

        public Repository(AppContext context)
        {
            this.context = context;
        }

        public TEntity Get(int id) => context.Set<TEntity>().Find(id);

        public IEnumerable<TEntity> GetAll() => context.Set<TEntity>().ToList();

        public void Add(TEntity entity) => context.Set<TEntity>().Add(entity);

        public void AddRange(IEnumerable<TEntity> entities) =>
            context.Set<TEntity>().AddRange(entities);

        public IEnumerable<TEntity> Find(Expression<Func<TEntity, bool>> predicate)
            => context.Set<TEntity>().Where(predicate);

        public void Remove(TEntity entity)
            => context.Set<TEntity>().Remove(entity);
        public void RemoveRange(IEnumerable<TEntity> entities)
            => context.Set<TEntity>().RemoveRange(entities);

        public void Save() => context.SaveChanges();

        private bool disposed = false;
        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
                if (disposing)
                    context.Dispose();

            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
