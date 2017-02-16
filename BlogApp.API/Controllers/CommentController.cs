﻿using BlogApp.API.Services;
using BlogApp.DAL.EF;
using BlogApp.DTO;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BlogApp.API.Controllers
{
    [Authorize]
    [RoutePrefix("api/comments")]
    public class CommentController : BaseController
    {
        CommentService commentService = new CommentService(AppContext.Create());

        public HttpResponseMessage Post(HttpRequestMessage request,  AddCommentViewModel comment)
        {
            if (!ModelState.IsValid)
                return request.CreateResponse(HttpStatusCode.BadRequest, GetErrorMessages());

            return commentService.Post(request, comment);
        }
        
        public IHttpActionResult Delete(int id)
        {
            if (commentService.Delete(id))
                return Ok();
            return BadRequest();
        }

        private IEnumerable<string> GetErrorMessages() =>
          ModelState.Values.SelectMany(x => x.Errors.Select(y => y.ErrorMessage));
    }
}