using System.Collections.Generic;
using BlogApp.DTO;
using BlogApp.DAL.EF;
using System.Web.Http;
using BlogApp.BLL.Services;

namespace BlogApp.API.Controllers
{
    [AllowAnonymous]
    [RoutePrefix("api/blog")]
    public class BlogController : BaseController
    {
        BlogService blogService = new BlogService(AppContext.Create());

        [HttpGet]
        [Route("GetBlogs")]
        public IEnumerable<BlogsViewModel> GetBlogs()
        {
            return blogService.GetBlogs();
        }

        [HttpGet]
        [Route("GetAllBLogsPosts/{id}")]
        public IEnumerable<PostViewModel> GetAllBlogsPosts(int id)
        {
            return blogService.GetAllBlogsPosts(id);
        }

    }
}