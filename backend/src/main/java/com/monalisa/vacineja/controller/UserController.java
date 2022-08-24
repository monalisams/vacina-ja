package com.monalisa.vacineja.controller;

import com.monalisa.vacineja.dto.TokenDto;
import com.monalisa.vacineja.dto.UserDTO;
import com.monalisa.vacineja.dto.UserLoginDTO;
import com.monalisa.vacineja.entity.User;

import com.monalisa.vacineja.enums.Role;
import com.monalisa.vacineja.security.jwt.JwtService;
import com.monalisa.vacineja.service.impl.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserServiceImpl userServiceImpl;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public User saveUser(@RequestBody @Valid UserDTO dto){
        String password = passwordEncoder.encode(dto.getPassword());
        dto.setPassword(password);
        return userServiceImpl.saveUser(dto);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id){
        userServiceImpl
                .deleteUser(id)
                .orElseThrow(() ->
                        new ResponseStatusException(HttpStatus.NOT_FOUND, "Usuário não encontrado."));
    }

    @PutMapping("/{id}")
    public User updateUser( @PathVariable Long id, @Valid @RequestBody UserDTO dto) {
        return userServiceImpl
                .updateUser(id, dto)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"Paciente não encontrado."));
    }
    @GetMapping("/all")
    public List<User> getUsers() {
        return userServiceImpl.getUsers();
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userServiceImpl
                .getUser(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"Usuário não encontrado."));
    }


    @PostMapping("auth")
    public TokenDto authenticate(@RequestBody UserLoginDTO userLoginDTO) {
        User user = User.builder()
                .login(userLoginDTO.getLogin())
                .password(userLoginDTO.getPassword())
                .build();
        UserDetails details = userServiceImpl.authenticate(user);
        String token = jwtService.generateToken(user);
        List<Role> roles = details.getAuthorities()
                .stream()
                .map(r -> Role.valueOf(r.getAuthority().replace("ROLE_", "")))
                .toList();
        return new TokenDto(user.getLogin(), token, roles);
    }
}
