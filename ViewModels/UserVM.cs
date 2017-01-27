namespace ViewModels
{
    public class UserVM
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }

        public virtual ApplicationUser AppUser { get; set; }
    }
}
