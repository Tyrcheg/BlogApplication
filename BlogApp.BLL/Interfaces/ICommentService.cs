using BlogApp.DTO;
using System.Net.Http;

namespace BlogApp.BLL.Interfaces
{
    public interface ICommentService
    {
        HttpResponseMessage Post(HttpRequestMessage requst, AddCommentViewModel comment);
        bool Delete(int id);

    }
}
