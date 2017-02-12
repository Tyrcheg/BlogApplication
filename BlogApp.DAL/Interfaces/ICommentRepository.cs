using BlogApp.DAL.Entities;
using System.Collections;
using System.Collections.Generic;

namespace BlogApp.DAL.Interfaces
{
    public interface ICommentRepository : IRepository<Comment>
    {
        IEnumerable<Comment> GetCommentsWithAuthors();
        void RemoveById(int id);
    }
}
