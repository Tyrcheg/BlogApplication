using BlogApp.DAL.EF;
using BlogApp.DAL.Entities;
using BlogApp.DAL.Interfaces;
using System.Data.Entity;
using System.Collections.Generic;
using System.Linq;

namespace BlogApp.DAL.Repositories
{
    public class CommentRepository : Repository<Comment>, ICommentRepository
    {
        public CommentRepository(AppContext context) 
            :base(context)
        {}

        public IEnumerable<Comment> GetCommentsWithAuthors() =>
            context.Comments.Include(x => x.User).ToList();

        public void RemoveById(int id)
        {
            context.Comments.Remove(
                context.Comments.Single(x => x.Id == id));
        }


    }
}
