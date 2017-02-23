using BlogApp.DTO;

namespace BlogApp.BLL.Interfaces
{
    public interface IPostService
    {
        PostWithCommentsViewModel GetPost(int id);
    }
}
