using BlogApp.DAL.Entities;
using BlogApp.DTO;
using Microsoft.AspNet.Identity;
using System.Threading.Tasks;

namespace BlogApp.DAL.Interfaces
{
    public interface IUserRepository : IRepository<ApplicationUser>
    {
        ApplicationUser FindById(string id);
        Task<IdentityResult> RegisterUser(UserVM userModel);
        Task<ApplicationUser> FindUser(string userName, string password);
    }
}
