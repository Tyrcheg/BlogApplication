using Microsoft.AspNet.Identity.EntityFramework;
using System.Collections.Generic;

namespace DAL.BlogApp.Entities
{
    public class ApplicationUser : IdentityUser
    {
        public virtual ClientProfile ClientProfile { get; set; }

        public virtual ICollection<Blog> Blogs { get; set; }
        public virtual ICollection<Comment> Comments { get; set; }
    }
}
