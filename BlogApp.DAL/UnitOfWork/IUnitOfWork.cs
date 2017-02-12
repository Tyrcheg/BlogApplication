using BlogApp.DAL.Interfaces;
using System;

namespace BlogApp.DAL.UnitOfWork
{
    public interface IUnitOfWork : IDisposable
    {
        IBlogRepository Blogs { get;  }
        ICommentRepository Comments { get; }
        IPostRepository Posts { get; }
        IUserRepository Users { get; }


        int Complete();
    }
}
