using BlogApp.DAL.Entities;

namespace BlogApp.DAL.Interfaces
{
    public interface IPostRepository : IRepository<Post>
    {
        Post GetPostWithCommentsUsersById(int id);
    }
}
