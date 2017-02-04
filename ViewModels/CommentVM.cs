using System;

namespace ViewModels
{
    public  class CommentVM
    {
        public int CommentId { get; set; }
        public string Text { get; set; }
        public DateTime? DateCreated { get; set; }
        public string UserName { get; set; }
        public string UserId { get; set; }

    }
}
