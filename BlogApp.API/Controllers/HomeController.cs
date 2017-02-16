using System.Web.Mvc;

namespace BlogApp.API.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index() => View();
    }
}
