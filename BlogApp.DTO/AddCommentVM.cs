using System.ComponentModel.DataAnnotations;

namespace BlogApp.DTO
{
    public class AddCommentVM
    {
        public int PostId { get; set; }

        [Required(ErrorMessage = "Text field is required")]
        public string Text { get; set; }

        [Required(ErrorMessage = "UserName field is required")]
        public string UserName { get; set; }
        //[Required(ErrorMessage = "UserId field is required")]
        //public string UserId { get; set; }
    }
}
