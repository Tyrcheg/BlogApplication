using System.Web.Mvc;

namespace BlogApp.BLLx.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index() => Redirect("http://localhost:53166/");
    }
}
