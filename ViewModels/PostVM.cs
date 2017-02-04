using System;
using System.Collections.Generic;

namespace ViewModels
{
    public class PostVM
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }
        public DateTime? DateCreated { get; set; }
        public IEnumerable<CommentVM> Comments { get; set; }

    }
}
