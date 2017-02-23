using System.Collections.Generic;
using BlogApp.DAL.EF;
using BlogApp.DAL.Repositories;
using BlogApp.DAL.Interfaces;
using BlogApp.DTO;
using BlogApp.BLL.Interfaces;

namespace BlogApp.BLL.Services
{
    public class PostService : IPostService
    {
        IPostRepository postRepository;

        public PostService(AppContext appContext)
        {
            postRepository = new PostRepository(appContext);
        }

        public PostWithCommentsViewModel GetPost(int id)
        {
            var tempPost = postRepository.GetPostWithCommentsUsersById(id);

            if (tempPost == null)
                //return new PostWithCommentsVM { Title = "No post with Id was found" };
                throw new System.NullReferenceException("No post with this Id was found");

            var post = new PostWithCommentsViewModel
            {
                Title = tempPost.Title,
                DateCreated = tempPost.DateCreated,
                Text = tempPost.Text,
                Comments = new List<CommentViewModel>()
            };


            if (tempPost.Comments != null)
                foreach (var comment in tempPost.Comments)
                    post.Comments.Add(new CommentViewModel
                    {
                        CommentId = comment.Id,
                        DateCreated = comment.DateCreated,
                        UserId = comment.User.Id,
                        UserName = comment.User.UserName,
                        Text = comment.Text
                    });

            return post;
        }
    }
}