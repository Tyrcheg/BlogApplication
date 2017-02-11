using System;
using System.Collections.Generic;

namespace BlogApp.DAL.Entities
{
    public class Post
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }
        public DateTime? DateCreated { get; set; }

        public ICollection<Comment> Comments { get; set; }
        public virtual Blog Blog { get; set; }
    }
}
