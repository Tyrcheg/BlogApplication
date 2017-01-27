using DAL.BlogApp.Entities;
using System;

namespace DAL.BlogApp.Interfaces
{
    public interface IClientManager : IDisposable
    {
        void Create(ClientProfile item);
    }
}
