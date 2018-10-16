﻿using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace ViewModel.Users
{
    public class UpdateRoleRequest
    {
        [Display(Name = "Имя")]
        [MinLength(5), MaxLength(40)]
        public string Name { get; set; }
        [Display(Description = "Описание")]
        [MinLength(5), MaxLength(40)]
        public string RoleDescription { get; set; }
    }
}
