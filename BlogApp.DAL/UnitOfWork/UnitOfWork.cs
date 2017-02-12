using BlogApp.DAL.EF;
using BlogApp.DAL.Interfaces;
using BlogApp.DAL.Repositories;

namespace BlogApp.DAL.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly AppContext _context;

        public UnitOfWork(AppContext context)
        {
            _context = context;
            Blogs = new BlogRepository(_context);
            Posts = new PostRepository(_context);
            Users = new UserRepository(_context);
            Comments = new CommentRepository(_context);
        }

        public IBlogRepository Blogs { get; private set; }
        public ICommentRepository Comments { get; private set; }
        public IPostRepository Posts { get; private set; }
        public IUserRepository Users { get; private set; }

        public int Complete() => _context.SaveChanges();

        public void Dispose() => _context.Dispose();
    }
}
