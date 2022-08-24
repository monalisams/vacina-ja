package com.monalisa.vacineja.dto;


import com.monalisa.vacineja.enums.Role;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserDTO {

    private String name;

    private String login;

    private String password;

    private Role role;




}
