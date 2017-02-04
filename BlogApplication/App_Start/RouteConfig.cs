using System.Web.Mvc;
using System.Web.Routing;

namespace BlogApplication
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "AngularApp",
                url: "{*url}",
                defaults: new { controller = "Home", action = "Index" }
            );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );


            //
            //routes.MapRoute(
            //    name: "DefaultViews",
            //    url: "view/{controller}/{action}/{id}",
            //    defaults: new { id = UrlParameter.Optional }
            //);  


        }
    }
}
