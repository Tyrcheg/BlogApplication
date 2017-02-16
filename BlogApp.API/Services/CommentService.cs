using BlogApp.DAL.EF;
using BlogApp.DAL.Entities;
using BlogApp.DAL.Interfaces;
using BlogApp.DAL.Repositories;
using BlogApp.DTO;
using System;
using System.Linq;
using System.Net;
using System.Net.Http;

namespace BlogApp.API.Services
{
    public class CommentService
    {
        ICommentRepository commentRepository;
        IUserRepository userRepository;
        IPostRepository postRepository;

        public CommentService(AppContext appContext)
        {
            commentRepository = new CommentRepository(appContext);
            userRepository = new UserRepository(appContext);
            postRepository = new PostRepository(appContext);
        }

        public HttpResponseMessage Post(HttpRequestMessage request, AddCommentViewModel comment)
        {
            //var user = userRepository.FindById(comment.UserId);
            var user = userRepository.GetAll().ToList()[new Random().Next(5)];
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

        public bool Delete(int id)
        {
            try
            {
                commentRepository.RemoveById(id);
                commentRepository.Save();
                return true;
            }
            catch
            {
                return false;
            }
        }
       
    }
}