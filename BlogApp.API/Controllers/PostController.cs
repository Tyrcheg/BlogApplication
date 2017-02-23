using BlogApp.DAL.EF;
using BlogApp.DTO;
using System.Web.Http;
using BlogApp.BLL.Interfaces;
using BlogApp.BLL.Services;

namespace BlogApp.API.Controllers
{
    [RoutePrefix("api/post")]
    public class PostController : BaseController
    {
        IPostService postService = new PostService(AppContext.Create()); 

        [Route("getPost/{id}")]
        public PostWithCommentsViewModel GetPost(int id)
        {
            return postService.GetPost(id);
        }
        
    }
}