using BlogApp.DAL.EF;
using BlogApp.DTO;
using System.Collections.Generic;
using System.Linq;
using System.Data.Entity;
using System.Web.Http;
using BlogApp.DAL.Interfaces;
using BlogApp.DAL.Repositories;
using BlogApp.API.Services;

namespace BlogApp.API.Controllers
{
    [RoutePrefix("api/post")]
    public class PostController : BaseController
    {
        PostService postService = new PostService(AppContext.Create()); 

        [Route("getPost/{id}")]
        public PostWithCommentsViewModel GetPost(int id)
        {
            return postService.GetPost(id);
        }
        
    }
}