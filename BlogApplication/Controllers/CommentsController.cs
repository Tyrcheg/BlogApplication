using DAL.BlogApp.EF;
using DAL.BlogApp.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.Entity;
using System.Web.Http;
using ViewModels;

namespace BlogApplication.Controllers
{
    public class CommentsController : ApiController
    {
        private readonly AppContext db = AppContext.Create();

        [HttpPost]
        public IHttpActionResult Post(AddCommentVM comment)
        {

            if (!ModelState.IsValid)
                //return request.CreateResponse(HttpStatusCode.BadRequest, GetErrorMessages());
                return BadRequest(GetErrorMessages().ToString());

            db.Comments.Add(new Comment
            {
                DateCreated = DateTime.Now,
                Text = comment.Text,
                User = db.Users.First(x => x.UserName == comment.UserName),
                Post = db.Posts.First(x => x.Id == comment.PostId)
            });
            db.SaveChangesAsync();
            //return new HttpResponseMessage(HttpStatusCode.OK);
            return Ok();
        }

        [HttpDelete]
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