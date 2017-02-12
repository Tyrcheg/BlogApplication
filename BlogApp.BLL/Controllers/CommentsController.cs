using BlogApp.DAL.EF;
using BlogApp.DAL.Entities;
using BlogApp.DAL.UnitOfWork;
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
        UnitOfWork unitOfWork = new UnitOfWork(AppContext.Create()); 

        [HttpPost]
        public HttpResponseMessage Post(HttpRequestMessage request,  AddCommentVM comment)
        {

            if (!ModelState.IsValid)
                return request.CreateResponse(HttpStatusCode.BadRequest, GetErrorMessages());

            var user = unitOfWork.Users.FindById(comment.UserId);
            var post = unitOfWork.Posts.Get(comment.PostId);

            unitOfWork.Comments.Add(new Comment
            {
                DateCreated = DateTime.Now,
                Text = comment.Text,
                User = user,
                Post = post
            });
            unitOfWork.Complete();

            return new HttpResponseMessage(HttpStatusCode.OK);
        }

        [HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            try
            {
                unitOfWork.Comments.RemoveById(id);
                unitOfWork.Complete();
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