﻿using System;

namespace BlogApp.DTO
{
    public class PostViewModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }
        public DateTime? DateCreated { get; set; }
    }
}