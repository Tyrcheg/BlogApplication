using System;
using System.Collections.Generic;

namespace ViewModels
{
    public class PostWithCommentsVM
    {
        public string Title { get; set; }
        public string Text { get; set; }
        public DateTime? DateCreated { get; set; }

        public List<CommentVM> Comments { get; set; }
    }
}
