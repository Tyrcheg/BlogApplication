using BlogApp.DAL.EF;
using BlogApp.DAL.Repositories;
using BlogApp.DAL.Interfaces;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using BlogApp.DTO;

namespace BlogApp.API.Services
{
    public class AccountService
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