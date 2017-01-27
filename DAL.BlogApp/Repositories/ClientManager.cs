using DAL.BlogApp.EF;
using DAL.BlogApp.Entities;
using DAL.BlogApp.Interfaces;

namespace DAL.BlogApp.Repositories
{
    public class ClientManager : IClientManager
    {
        public AppContext Database { get; set; }
        public ClientManager(AppContext db)
        {
            Database = db;
        }

        public void Create(ClientProfile item)
        {
            Database.ClientProfiles.Add(item);
            Database.SaveChanges();
        }

        public void Dispose()
        {
            Database.Dispose();
        }
    }
}
