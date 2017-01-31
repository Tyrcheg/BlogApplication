using DAL.BlogApp.Entities;
using DAL.BlogApp.Repositories;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;

namespace DAL.BlogApp.EF
{
    public class Initializer : DropCreateDatabaseIfModelChanges<AppContext>
    {
        protected override void Seed(AppContext context)
        {
            base.Seed(context);

            //IdentityUnitOfWork db = new IdentityUnitOfWork();

            var roleStore = new RoleStore<IdentityRole>(context);
            var roleManager = new RoleManager<IdentityRole>(roleStore);
            var userStore = new UserStore<ApplicationUser>(context);
            var userManager = new UserManager<ApplicationUser>(userStore);

            if (roleManager.FindByName("Admin") == null)
                roleManager.Create(new IdentityRole("Admin"));

            if (userManager.FindByName("admin") == null)
            {
                var newUser = new ApplicationUser()
                {
                    UserName = "admin",
                    Email = "xxx@xxx.net",
                    PhoneNumber = "5551234567"
                };
                userManager.Create(newUser, "Password1");
                userManager.SetLockoutEnabled(newUser.Id, false);
                userManager.AddToRole(newUser.Id, "Admin");
            }

            context.Users.AddOrUpdate(u => u.UserName,
                new ApplicationUser
                {
                    Id = "aslkdjfn123",
                    UserName = "Maxim",
                    PasswordHash = new PasswordHasher().HashPassword("qwe123"),
                    PhoneNumber = "123123123",
                    LockoutEnabled = false
                }
            );

            context.SaveChanges();

            context.Blogs.AddRange(new[] {
                new Blog
                {
                    DateCreated = DateTime.Now,
                    Name = "Evgeniys blog",

                    User = new ApplicationUser
                    {
                        Id = "aslkdjf211",
                        UserName = "Evgeniy",
                        PasswordHash = new PasswordHasher().HashPassword("qwe123"),
                        PhoneNumber = "123123123"
                    },

                    Posts =  new List<Post>
                    {
                        new Post
                        {
                            Title = "First post",
                            Text = "This post is first.",
                            Comments = new List<Comment>
                            {
                                new Comment
                                {
                                    Text = "comment to cook blog",
                                    User = new ApplicationUser
                                    {
                                        Id = "aslkdjfn121",
                                        UserName = "Dmitry",
                                        PasswordHash = new PasswordHasher().HashPassword("qwe123"),
                                        PhoneNumber = "123123123"
                                    },
                                    DateCreated = DateTime.Now
                                }
                            },
                            DateCreated = DateTime.Now
                        },
                        new Post
                        {
                            Title = "Second post",
                            Text = "This post is about all staff",
                            DateCreated = DateTime.Now,
                            Comments = new List<Comment>
                            {
                                new Comment
                                {
                                    Text = "Comment",
                                    User = userManager.FindByName("Maxim"),
                                    DateCreated = DateTime.Now
                                },
                                new Comment
                                {
                                    Text = "Comment",
                                    User = userManager.FindByName("Maxim"),
                                    DateCreated = DateTime.Now
                                }
                            },
                        }
                    }

                }
            });

            context.SaveChanges();

        }
    }
}
