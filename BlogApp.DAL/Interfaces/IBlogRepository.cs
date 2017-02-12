using BlogApp.DAL.Entities;
using System.Collections;
using System.Collections.Generic;

namespace BlogApp.DAL.Interfaces
{
    public interface IBlogRepository : IRepository<Blog> 
    {
        IEnumerable<Blog> GetBlogsWithPostsAuthors(int pageIndex, int pageSize);
    }
}
