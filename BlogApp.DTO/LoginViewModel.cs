using System;
using System.ComponentModel.DataAnnotations;

namespace BlogApp.DTO
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "The username is required.")]
        [Display(Name = "User name")]
        public string UserName { get; set; }

        [Required(ErrorMessage = "Password is requried.")]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }
    }
}
