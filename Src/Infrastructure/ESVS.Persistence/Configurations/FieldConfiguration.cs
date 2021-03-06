﻿using System;
using System.Collections.Generic;
using System.Text;
using ESVS.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ESVS.Persistence.Configurations
{
    public class FieldConfiguration: IEntityTypeConfiguration<Field>
    {
        public void Configure(EntityTypeBuilder<Field> builder)
        {
             builder.HasQueryFilter(p => !p.IsDeleted);
             builder.HasKey(e => e.Id);
        }
            
    }
}
