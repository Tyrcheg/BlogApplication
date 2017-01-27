using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace BlogApplication.App_Start
{
    public class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.Routes.MapHttpRoute(
                "Api defalult",
                "api/{controller}/{id}",
                new { id = RouteParameter.Optional });

            //GlobalConfiguration.Configuration.Formatters.JsonFormatter.SerializerSettings.ContractResolver = 
            //    new CamelCasePropertyNamesContractResolver();
        }
    }
}