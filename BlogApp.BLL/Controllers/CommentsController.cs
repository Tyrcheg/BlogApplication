using BlogApp.DAL.EF;
using BlogApp.DAL.Entities;
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
        private readonly AppContext db = AppContext.Create();

        [HttpPost]
        //[Route("post")]
        public HttpResponseMessage Post(HttpRequestMessage request,  AddCommentVM comment)
        {

            if (!ModelState.IsValid)
                return request.CreateResponse(HttpStatusCode.BadRequest, GetErrorMessages());

            db.Comments.Add(new Comment
            {
                DateCreated = DateTime.Now,
                Text = comment.Text,
                User = db.Users.First(x => x.UserName == comment.UserName),
                Post = db.Posts.First(x => x.Id == comment.PostId)
            });
            db.SaveChanges();
            return new HttpResponseMessage(HttpStatusCode.OK);
        }

        [HttpDelete]
        //[Route("delete")]
        public IHttpActionResult Delete(int id)
        {
            try
            {
                db.Comments.Remove(db.Comments.First(x => x.Id == id));
                db.SaveChanges();
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }
        private IEnumerable<string> GetErrorMessages()
        {
            return ModelState.Values.SelectMany(x => x.Errors.Select(y => y.ErrorMessage));
        }
    }
}