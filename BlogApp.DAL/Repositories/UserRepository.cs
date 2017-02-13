using BlogApp.DAL.EF;
using BlogApp.DAL.Entities;
using BlogApp.DAL.Interfaces;

namespace BlogApp.DAL.Repositories
{
    public class UserRepository : Repository<ApplicationUser>, IUserRepository
    {
        public UserRepository(AppContext context ):
            base(context)
        {}

        public ApplicationUser FindById(string id)
            => context.Users.Find(id);

    }
}
