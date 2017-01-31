using DAL.BlogApp.EF;
using DAL.BlogApp.Entities;
using System.Linq;
using System.Web.Http;

namespace BlogApplication.Controllers
{
    public class BlogController : ApiController
    {
        AppContext db = AppContext.Create(); 
        public Blog[] getBlogs()
        {
            return db.Blogs.ToArray();
        }
            
    }
}