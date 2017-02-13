using BlogApp.DAL.EF;
using BlogApp.DTO;
using System.Collections.Generic;
using System.Linq;
using System.Data.Entity;
using System.Web.Http;
using BlogApp.DAL.Interfaces;
using BlogApp.DAL.Repositories;

namespace BlogApp.BLL.Controllers
{
    [RoutePrefix("api/post")]
    public class PostController : BaseController
    {
        IPostRepository postRepository;

        public PostController()
        {
            var context = AppContext.Create();
            postRepository = new PostRepository(context);
        }

        [Route("getPost/{id}")]
        public PostWithCommentsVM GetPost(int id)
        {
            var tempPost = postRepository.GetPostWithCommentsUsersById(id);
            
            if (tempPost == null)
                //return new PostWithCommentsVM { Title = "No post with Id was found" };
                throw new System.NullReferenceException("No post with this Id was found");

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