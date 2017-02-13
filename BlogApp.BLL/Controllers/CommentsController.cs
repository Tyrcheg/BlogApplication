using BlogApp.DAL.EF;
using BlogApp.DAL.Entities;
using BlogApp.DAL.Interfaces;
using BlogApp.DAL.Repositories;
using BlogApp.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BlogApp.BLL.Controllers
{
    [RoutePrefix("api/comments")]
    public class CommentsController : BaseController
    {
        ICommentRepository commentRepository;
        IUserRepository userRepository;
        IPostRepository postRepository;

        public CommentsController()
        {
            var context = AppContext.Create();
            commentRepository = new CommentRepository(context);
            userRepository = new UserRepository(context);
            postRepository = new PostRepository(context);
        }

        [HttpPost]
        public HttpResponseMessage Post(HttpRequestMessage request,  AddCommentVM comment)
        {

            if (!ModelState.IsValid)
                return request.CreateResponse(HttpStatusCode.BadRequest, GetErrorMessages());

            var user = userRepository.FindById(comment.UserId);
            var post = postRepository.Get(comment.PostId);

            commentRepository.Add(new Comment
            {
                DateCreated = DateTime.Now,
                Text = comment.Text,
                User = user,
                Post = post
            });
            commentRepository.Save();

            return new HttpResponseMessage(HttpStatusCode.OK);
        }

        [HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            try
            {
                commentRepository.RemoveById(id);
                commentRepository.Save();
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }

        private IEnumerable<string> GetErrorMessages() =>
            ModelState.Values.SelectMany(x => x.Errors.Select(y => y.ErrorMessage));
    }
}