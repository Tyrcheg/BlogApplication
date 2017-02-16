using BlogApp.DAL.EF;
using BlogApp.DAL.Entities;
using BlogApp.DAL.Interfaces;
using System.Collections;
using System.Data.Entity;
using System.Linq;

namespace BlogApp.DAL.Repositories
{
    public class PostRepository : Repository<Post>, IPostRepository
    {
        public PostRepository(AppContext context)
            :base(context)
        {}


        public Post GetPostWithCommentsUsersById(int id)
        {
              return context.Posts
                .Include(x => x.Comments)
                .Include(x => x.Comments.Select(u => u.User))
                .FirstOrDefault(x => x.Id == id);
        }

    }
}
