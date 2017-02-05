using DAL.BlogApp.EF;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web.Http;
using ViewModels;

namespace BlogApplication.Controllers
{
    public class PostController : ApiController
    {
        AppContext db = AppContext.Create();

        public PostWithCommentsVM GetPost(int id)
        {
            var tempPost = db.Posts
                .Include(x => x.Comments.Select(u => u.User))
                .FirstOrDefault(x => x.Id == id);

            var post = new PostWithCommentsVM
            {
                Title = tempPost.Title,
                DateCreated = tempPost.DateCreated,
                Text = tempPost.Text
            };

            post.Comments = new List<CommentVM>();

            if(tempPost.Comments != null)
            foreach (var comment in tempPost.Comments)
                post.Comments.Add(new CommentVM
                {
                    CommentId = comment.Id,
                    DateCreated = comment.DateCreated,
                    UserId = comment.User.Id,
                    UserName = comment.User.UserName,
                    Text = comment.Text
                });

            return post;
        }
        
    }
}