using DAL.BlogApp.Entities;
using Microsoft.AspNet.Identity;

namespace DAL.BlogApp.Identity
{
    public class ApplicationUserManager : UserManager<ApplicationUser>
    {
        // класс для управления пользователями.
        public ApplicationUserManager(IUserStore<ApplicationUser> store)
                : base(store)
        {
        }
    }
}
