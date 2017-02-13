using Microsoft.Owin;
using Owin;
using BlogApp.DAL.EF;

[assembly: OwinStartup(typeof(BlogApp.BLL.Startup))]

namespace BlogApp.BLL
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
            AppContext.Init();
        }
    }
}
