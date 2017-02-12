using BlogApp.DAL.Entities;

namespace BlogApp.DAL.Interfaces
{
    public interface IUserRepository : IRepository<ApplicationUser>
    {
        ApplicationUser FindById(string id);
    }
}
