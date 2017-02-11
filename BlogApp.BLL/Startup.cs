using Microsoft.Owin;
using Owin;
using BlogApp.DAL.EF;

[assembly: OwinStartup(typeof(BlogApp.BLLx.Startup))]

namespace BlogApp.BLLx
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
