﻿using BlogApp.DAL.Entities;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;

namespace BlogApp.DAL.EF
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
                    Name = "Sport blog",

                    User = new ApplicationUser
                    {
                        UserName = "Dmitry",
                        PasswordHash = new PasswordHasher().HashPassword("qwe123"),
                        PhoneNumber = "123123123"
                    },

                    Posts =  new List<Post>
                    {
                        new Post
                        {
                            Title = "Run forest run",
                            Text = TextInitializer.run,
                            Comments = new List<Comment>
                            {
                                new Comment
                                {
                                    Text = "Here must be a comment",
                                    User = new ApplicationUser
                                    {
                                        UserName = "Artem",
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
                            Title = "Swimming",
                            Text = TextInitializer.swim,
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

                },
                new Blog
                {
                    DateCreated = DateTime.Now,
                    Name = "Oblomoff blog",

                    User = new ApplicationUser
                    {
                        UserName = "Dryje oblomoff",
                        PasswordHash = new PasswordHasher().HashPassword("qwe123"),
                        PhoneNumber = "198123878"
                    },

                    Posts =  new List<Post>
                    {
                        new Post
                        {
                            Title = "Stake ribeye",
                            Text = TextInitializer.ribeye,
                            Comments = new List<Comment>
                            {
                                new Comment
                                {
                                    Text = "awesome",
                                    User = new ApplicationUser
                                    {
                                        UserName = "Valera",
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
                            Title = "Fried fish",
                            Text = TextInitializer.fish,
                            DateCreated = DateTime.Now,
                            Comments = new List<Comment>
                            {
                                new Comment
                                {
                                    Text = "wow",
                                    User = userManager.FindByName("Maxim"),
                                    DateCreated = DateTime.Now
                                },
                                new Comment
                                {
                                    Text = "awesome, man.",
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
