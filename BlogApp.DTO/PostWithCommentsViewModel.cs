using System;
using System.Collections.Generic;

namespace BlogApp.DTO
{
    public class PostWithCommentsViewModel
    {
        public string Title { get; set; }
        public string Text { get; set; }
        public DateTime? DateCreated { get; set; }

        public List<CommentViewModel> Comments { get; set; }
    }
}
