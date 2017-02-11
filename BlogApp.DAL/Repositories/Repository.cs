using DAL.BlogApp.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Linq.Expressions;
using BlogApp.DAL.EF;

namespace DAL.BlogApp.Repositories
{
    class Repository<TEntity> : IRepository<TEntity> where TEntity : class
    {
        protected readonly AppContext db;

        public Repository(AppContext context)
        {
            db = context;
        }

        public TEntity Get(int id) => db.Set<TEntity>().Find(id);

        public IEnumerable<TEntity> GetAll() => db.Set<TEntity>().ToList();

        public void Add(TEntity entity) => db.Set<TEntity>().Add(entity);

        public void AddRange(IEnumerable<TEntity> entities) =>
            db.Set<TEntity>().AddRange(entities);

        public IEnumerable<TEntity> Find(Expression<Func<TEntity, bool>> predicate)
            => db.Set<TEntity>().Where(predicate);

        public void Remove(TEntity entity)
            => db.Set<TEntity>().Remove(entity);
        public void RemoveRange(IEnumerable<TEntity> entities)
        {
            throw new NotImplementedException();
        }
    }
}
