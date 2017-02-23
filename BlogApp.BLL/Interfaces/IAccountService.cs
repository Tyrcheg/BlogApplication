using BlogApp.DTO;
using Microsoft.AspNet.Identity;
using System.Threading.Tasks;

namespace BlogApp.BLL.Interfaces
{
    public interface IAccountService
    {
        Task<IdentityResult> Register(UserViewModel userModel);
    }
}
