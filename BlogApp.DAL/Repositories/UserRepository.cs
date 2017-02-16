using BlogApp.DAL.EF;
using BlogApp.DAL.Entities;
using BlogApp.DAL.Interfaces;
using BlogApp.DTO;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Threading.Tasks;

namespace BlogApp.DAL.Repositories
{
    public class UserRepository : Repository<ApplicationUser>, IUserRepository
    {
        private readonly UserManager<ApplicationUser> _userManager;
        public UserRepository(AppContext context)
            :base(context)
        {
            _userManager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(context));
        }

        public ApplicationUser FindById(string id)
            => context.Users.Find(id);

        public async Task<IdentityResult> RegisterUser(UserViewModel userModel)
        {
            var user = new ApplicationUser { UserName = userModel.UserName };

            return await _userManager.CreateAsync(user, userModel.Password);
        }

        public async Task<ApplicationUser> FindUser(string userName, string password)
            => await _userManager.FindAsync(userName, password);

        public override void Dispose()
        {
            base.Dispose();
            _userManager.Dispose();
        }
    }
}
