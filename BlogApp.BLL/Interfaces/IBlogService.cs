using BlogApp.DTO;
using System.Collections.Generic;

namespace BlogApp.BLL.Interfaces
{
    public interface IBlogService
    {
        IEnumerable<BlogsViewModel> GetBlogs();
        IEnumerable<PostViewModel> GetAllBlogsPosts(int id);
    }
}
