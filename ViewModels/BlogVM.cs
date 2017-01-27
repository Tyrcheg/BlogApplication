using System;
using System.Collections.Generic;

namespace ViewModels
{
    public class BlogVM
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime? DateCreated { get; set; }
        //public virtual ICollection<Post> Posts { get; set; }
        public virtual ApplicationUser User { get; set; }
    }
}
