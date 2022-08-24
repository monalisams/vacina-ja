package com.monalisa.vacineja.mapper;

import com.monalisa.vacineja.dto.UserDTO;
import com.monalisa.vacineja.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public abstract class UserMapper {
    public static final UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    public abstract User toUser(UserDTO userDTO);
}
