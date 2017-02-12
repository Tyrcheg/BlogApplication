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
            => AppContext.Users.Find(id);

        public AppContext AppContext
        {
            get { return context as AppContext; }
        }
    }
}
