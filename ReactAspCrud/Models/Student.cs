﻿namespace ReactAspCrud.Models
{
    using System.ComponentModel.DataAnnotations;

    public class Student
    {
        [Key]
        public int id { get; set; }
        public string stname { get; set; }
        public string course { get; set; }
    }
}
