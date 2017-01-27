using DAL.BlogApp.Entities;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Data.Entity;

namespace DAL.BlogApp.EF
{
    public class AppContext : IdentityDbContext<ApplicationUser>
    {
        static string connectionString = @"data source=(localdb)\mssqllocaldb; initial catalog=BlogDb;" +
            "integrated security=True; MultipleActiveResultSets=True; App=EntityFramework";
        private AppContext() : base(connectionString, false){}
        static AppContext() { Database.SetInitializer<AppContext>(new Initializer()); }
        public static void Init() { Create().Database.Initialize(true); }

        public static AppContext Create() { return new AppContext(); }

        public DbSet<ClientProfile> ClientProfiles { get; set; }
        public DbSet<Blog>  Blogs { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<Comment> Comments { get; set; }
    }
}
