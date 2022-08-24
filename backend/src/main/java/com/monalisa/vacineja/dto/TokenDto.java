package com.monalisa.vacineja.dto;

import com.monalisa.vacineja.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TokenDto {
    private String login;
    private String token;
    private List<Role> roles;
}
