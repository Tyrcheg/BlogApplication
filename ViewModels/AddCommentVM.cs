using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ViewModels
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
