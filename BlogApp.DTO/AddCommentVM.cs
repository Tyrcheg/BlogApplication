using System.ComponentModel.DataAnnotations;

namespace BlogApp.DTO
{
    public class AddCommentVM
    {
        [Required(ErrorMessage = "Text field is required")]
        public string Text { get; set; }

        [Required(ErrorMessage = "PostID is required")]
        public int PostId { get; set; }

        [Required(ErrorMessage = "UserID is required")]
        public string UserId { get; set; }
    }
}
