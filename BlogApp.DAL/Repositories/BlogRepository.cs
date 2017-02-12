using BlogApp.DAL.EF;
using BlogApp.DAL.Entities;
using BlogApp.DAL.Interfaces;
using System.Data.Entity;
using System.Collections.Generic;
using System.Linq;

namespace BlogApp.DAL.Repositories
{
    public class BlogRepository : Repository<Blog>, IBlogRepository
    {
        public BlogRepository(AppContext context)
            :base(context)
        {}

        public IEnumerable<Blog> GetBlogsWithPostsAuthors
            (int pageIndex = 1, int pageSize = 10)
        {
            return AppContext.Blogs
                .Include(x => x.User)
                .OrderBy(x => x.Name).
                Skip((pageIndex - 1) * pageSize).
                Take(pageSize).
                ToList();
        }

        public AppContext AppContext
        {
            get { return context as AppContext; }
        }
    }
}
