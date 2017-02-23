using BlogApp.BLL.Interfaces;
using BlogApp.DAL.EF;
using BlogApp.DAL.Interfaces;
using BlogApp.DAL.Repositories;
using BlogApp.DTO;
using Microsoft.AspNet.Identity;
using System.Threading.Tasks;

namespace BlogApp.BLL.Services
{
    public class AccountService : IAccountService
    {
        readonly IUserRepository _userRepository;

        public AccountService(AppContext appContext)
        {
            _userRepository = new UserRepository(appContext);
        }

        public async Task<IdentityResult> Register(UserViewModel userModel)
        {
            var result =  await _userRepository.RegisterUser(userModel);
            return result;
        }

    }
}