using System;
using System.ComponentModel.DataAnnotations;

namespace ViewModels
{
    public  class CommentVM
    {
        public int CommentId { get; set; }
        [Required(ErrorMessage = "PostId field is required")]
        public int PostId { get; set; }

        [Required(ErrorMessage = "Text field is required")]
        public string Text { get; set; }

        [Required(ErrorMessage = "DateCreatedfield is required")]
        public DateTime? DateCreated { get; set; }

        [Required(ErrorMessage = "UserName field is required")]
        public string UserName { get; set; }
        [Required(ErrorMessage = "UserId field is required")]
        public string UserId { get; set; }

    }
}
