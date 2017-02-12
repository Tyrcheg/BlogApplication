using BlogApp.DAL.EF;
using BlogApp.DAL.Entities;
using BlogApp.DAL.Interfaces;
using System.Collections;

namespace BlogApp.DAL.Repositories
{
    public class PostRepository : Repository<Post>, IPostRepository
    {
        public PostRepository(AppContext context)
            :base(context)
        {}


        public AppContext AppContext
        {
            get { return context as AppContext; }
        }
    }
}
