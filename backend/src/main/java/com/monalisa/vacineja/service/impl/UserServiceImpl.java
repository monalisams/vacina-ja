package com.monalisa.vacineja.service.impl;

import com.monalisa.vacineja.dto.UserDTO;
import com.monalisa.vacineja.entity.Patient;
import com.monalisa.vacineja.entity.User;
import com.monalisa.vacineja.exception.InvalidPassword;
import com.monalisa.vacineja.mapper.UserMapper;
import com.monalisa.vacineja.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserDetailsService {

    @Lazy @Autowired
    private PasswordEncoder encoder;

    private final UserRepository userRepository;

    @Transactional
    public UserDetails authenticate(User user){
        UserDetails userDetails = loadUserByUsername(user.getLogin());
        boolean identicalPasswords = encoder.matches(user.getPassword(), userDetails.getPassword());
        if(identicalPasswords){
            return userDetails;
        }
        throw new InvalidPassword();
    }


    @Transactional
    public User saveUser(UserDTO dto){
        User user = UserMapper.INSTANCE.toUser(dto);
        userRepository.save(user);
        return user;
    }

    @Transactional
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Transactional
    public Optional<User> getUser(Long id) {
         return userRepository.findById(id);
    }

    @Transactional
    public Optional<User> deleteUser(Long id) {
        return userRepository
                .findById(id)
                .map(u -> {
                    userRepository.delete(u);
                    return u;
                });
    }

    @Transactional
    public Optional<User> updateUser(Long id, UserDTO dto) {
        return userRepository
                .findById(id)
                .map( u -> {
                    User user = UserMapper.INSTANCE.toUser(dto);
                    user.setId(u.getId());
                    if(dto.getPassword() == null) {
                        user.setPassword(u.getPassword());
                    }
                    userRepository.save(user);
                    return u;
                });
    }

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository
                .findByLogin(username)
                .orElseThrow(() -> new UsernameNotFoundException("Usuário não existe"));

        String[] roles = new String[]{user.getRole().name()};

        return org.springframework.security.core.userdetails.User.builder()
                .username(user.getLogin())
                .password(user.getPassword())
                .roles(roles)
                .build();
    }
}
