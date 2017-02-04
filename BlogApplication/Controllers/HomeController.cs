using DAL.BlogApp.EF;
using System.Data.Entity;
using System.Linq;
using System.Web.Mvc;


namespace BlogApplication.Controllers
{
    public class HomeController : Controller
    {
        AppContext db = AppContext.Create();

        [OutputCache(NoStore = true, Duration = 60, VaryByParam = "*")]
        public ActionResult Index()
        {
           // return RedirectToRoute("index.html");
            return new FilePathResult("index.html", "text/html");
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";
            var model = db.Blogs.Include(x => x.Posts).Include(s => s.Posts.Select(a => a.Comments)).ToList();
            var model1 = db.Blogs.Include(x => x.Posts).ToList();
            return View(model);
        }
    }
}