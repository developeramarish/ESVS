﻿using System;
using System.ComponentModel.DataAnnotations;

namespace ViewModel.Roles
{
    public class UpdateRoleRequest
    {
        [Required]
        public Guid Id { get; set; }
        [Display(Name = "Имя")]
        [MinLength(5), MaxLength(40)]
        public string Name { get; set; }
        [Display(Description = "Описание")]
        [MinLength(5), MaxLength(40)]
        public string RoleDescription { get; set; }
    }
}
