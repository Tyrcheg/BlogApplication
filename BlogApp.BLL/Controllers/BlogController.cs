using System.Collections.Generic;
using BlogApp.DTO;
using BlogApp.DAL.EF;
using System.Web.Http;
using BlogApp.DAL.Interfaces;
using BlogApp.DAL.Repositories;

namespace BlogApp.BLL.Controllers
{
    [RoutePrefix("api/blog")]
    public class BlogController : BaseController
    {
        IBlogRepository blogRepository = new BlogRepository(AppContext.Create());

        [HttpGet]
        [Route("GetBlogs")]
        public IEnumerable<BlogsVM> GetBlogs()
        {
            var blogsList = new List<BlogsVM>();
            var blogs = blogRepository.GetBlogsWithPostsAuthors(1, 10);

            foreach (var blog in blogs)
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
        [Route("GetAllBLogsPosts/{id}")]
        public IEnumerable<PostVM> GetAllBlogsPosts(int id)
        {
            var postsList = new List<PostVM>();
            var blogsPosts = blogRepository.Get(id);

            foreach (var post in blogsPosts.Posts)
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