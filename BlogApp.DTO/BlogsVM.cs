namespace BlogApp.DTO
{
    public class BlogsVM
    {
        public int BlogId { get; set; }
        public string BlogName { get; set; }
        public string BlogsOwnerUserName { get; set; }
        public string BlogsOwnerId { get; set; }
        public int PostsQty { get; set; }
    }
}
