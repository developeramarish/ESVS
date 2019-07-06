﻿using AutoMapper;
using Entities;
using ViewModel.Roles;
using ViewModel.Users;
using ViewModel.Catalogs;
using ViewModel.Fields;
using ViewModel.FieldValues;

namespace ESVS
{

    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<ViewModel.Kmiac.Catalog, Catalog>();
            CreateMap<ViewModel.Kmiac.Field, Field>();


            CreateMap<Catalog, CatalogResponse>()
                .ForMember(d => d.ChildCatalogsCount, o => o.MapFrom(src => src.ChildCatalogs.Count))
                .ForMember(d => d.FieldsCount, o => o.MapFrom(src => src.Fields.Count));
            CreateMap<CreateCatalogRequest, Catalog>();
            CreateMap<UpdateCatalogRequest, Catalog>();

            CreateMap<Field, FieldResponse>()
            .ForMember(d => d.FieldValuesCount, o => o.MapFrom(src => src.FieldValues.Count));

            CreateMap<CreateFieldRequest, Field>();
            CreateMap<UpdateFieldRequest, Field>();


            CreateMap<FieldValue, FieldValuesResponse>();
            CreateMap<CreateFieldValuesRequest, FieldValue>();
            CreateMap<UpdateFieldValuesRequest, FieldValue>();

            CreateMap<User, UserResponse>()
                .ForMember(d => d.Id, o => o.MapFrom(src => src.Id))
                .ForMember(d => d.Email, o => o.MapFrom(src => src.Email))
                .ForMember(d => d.UserName, o => o.MapFrom(src => src.UserName))
                .ForMember(d => d.FirstName, o => o.MapFrom(src => src.FirstName))
                .ForMember(d => d.LastName, o => o.MapFrom(src => src.LastName))
                .ForMember(d => d.PathToAvatar, o => o.MapFrom(src => src.PathToAvatar))
                .ForMember(d => d.LevelId, o => o.MapFrom(src => src.LevelId))
                .ForMember(d => d.Gender, o => o.MapFrom(src => src.Gender))
                .ForMember(d => d.LastName, o => o.MapFrom(src => src.LastName))
                .ForMember(d => d.Gender, o => o.MapFrom(src => src.Gender))



                .ForAllOtherMembers(opts => opts.Ignore());
      





        }
    }



}

