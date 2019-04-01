﻿using System;
using System.Threading.Tasks;
using ViewModel;
using ViewModel.FieldValues;

namespace DataAccess.FieldValue
{
    public interface IFieldValueQuery
    {
        Task<FieldValueResponse> RunAsync(Guid FieldValueId);
    }
}
