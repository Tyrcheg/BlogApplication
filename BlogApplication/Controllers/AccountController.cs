using DAL.BlogApp.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using ViewModels;

namespace BlogApplication.Controllers
{

    public class AccountController : ApiController
    {
        readonly AppContext db = AppContext.Create();

        //public IEnumerable<string> Get()
        public IEnumerable<DAL.BlogApp.Entities.ApplicationUser> Get()
        {
            return db.Users.ToList();
        }
    }
}