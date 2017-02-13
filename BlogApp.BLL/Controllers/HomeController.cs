using System.Web.Mvc;

namespace BlogApp.BLL.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index() => View();
    }
}
