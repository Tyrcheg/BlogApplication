using System.Web.Http;
using System.Web.Http.Cors;

namespace BlogApp.BLL.Controllers
{
    [EnableCors(origins: "http://localhost:53166", headers: "*", methods: "*")]
    public class BaseController : ApiController
    {
    }
}