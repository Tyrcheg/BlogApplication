﻿using DAL.BlogApp.Entities;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.BlogApp.Identity
{
    public class ApplicationUserManager : UserManager<ApplicationUser>
    {
        // класс для управления пользователями.
        public ApplicationUserManager(IUserStore<ApplicationUser> store)
                : base(store)
        {
        }
    }
}
