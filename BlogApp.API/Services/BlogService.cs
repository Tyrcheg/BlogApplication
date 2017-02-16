using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BlogApp.DAL.EF;
using BlogApp.DAL.Repositories;
using BlogApp.DAL.Interfaces;
using BlogApp.DTO;

namespace BlogApp.API.Services
{
    public class BlogService
    {
        IBlogRepository blogRepository;
        public BlogService(AppContext appContext)
        {
            blogRepository = new BlogRepository(appContext);
        }

        public IEnumerable<BlogsViewModel> GetBlogs()
        {
            var blogsList = new List<BlogsViewModel>();
            var blogs = blogRepository.GetBlogsWithPostsAuthors(1, 10);

            foreach (var blog in blogs)
                blogsList.Add(new BlogsViewModel
                {
                    BlogId = blog.Id,
                    BlogName = blog.Name,
                    PostsQty = blog.Posts.Count,
                    BlogsOwnerUserName = blog.User.UserName,
                    BlogsOwnerId = blog.User.Id
                });

            return blogsList;
        }

        public IEnumerable<PostViewModel> GetAllBlogsPosts(int id)
        {
            var postsList = new List<PostViewModel>();
            var blogsPosts = blogRepository.Get(id);

            foreach (var post in blogsPosts.Posts)
                postsList.Add(new PostViewModel
                {
                    Id = post.Id,
                    DateCreated = post.DateCreated,
                    Text = post.Text,
                    Title = post.Title,
                });

            return postsList;
        }
    }
}