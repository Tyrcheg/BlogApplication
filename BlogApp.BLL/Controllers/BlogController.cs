using System.Collections.Generic;
using System.Linq;
using BlogApp.DTO;
using BlogApp.DAL.EF;
using System.Data.Entity;
using System.Web.Http;

namespace BlogApp.BLL.Controllers
{
    [RoutePrefix("api/blog")]
    public class BlogController : BaseController
    {
        AppContext db = AppContext.Create();

        [HttpGet]
        [Route("GetBlogs")]
        public IEnumerable<BlogsVM> GetBlogs()
        {
            var blogsList = new List<BlogsVM>();

            foreach (var blog in db.Blogs.Include(x => x.Posts).Include(x => x.User))
                blogsList.Add(new BlogsVM
                {
                    BlogId = blog.Id,
                    BlogName = blog.Name,
                    PostsQty = blog.Posts.Count,
                    BlogsOwnerUserName =  blog.User.UserName,
                    BlogsOwnerId = blog.User.Id
                });

            return blogsList;
        }
        [HttpGet]
        [Route("GetAllBLogsPosts/{id?}")]
        public IEnumerable<PostVM> GetAllBlogsPosts(int? id)
        {
            var postsList = new List<PostVM>();

            foreach (var post in db.Posts.Where(x => x.Blog.Id == id))
                postsList.Add(new PostVM
                {
                    Id = post.Id,
                    DateCreated = post.DateCreated,
                    Text = post.Text,
                    Title = post.Title,
                });

            return postsList;
        }

    }
}