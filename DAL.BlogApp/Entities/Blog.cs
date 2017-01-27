using System;
using System.Collections.Generic;

namespace DAL.BlogApp.Entities
{
    public class Blog
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime? DateCreated { get; set; }
        public virtual ICollection<Post> Posts { get; set; }
        public virtual ApplicationUser User { get; set; }
    }
}
