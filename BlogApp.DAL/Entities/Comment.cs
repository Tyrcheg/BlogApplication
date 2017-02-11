using System;

namespace BlogApp.DAL.Entities
{
    public class Comment
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public DateTime? DateCreated { get; set; }

        public virtual ApplicationUser User { get; set; }
        public virtual Post Post { get; set; }

    }
}
