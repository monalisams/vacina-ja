package com.monalisa.vacineja.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.monalisa.vacineja.enums.Role;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Table(name="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", length = 255)
    private String name;

    @Column(name = "login", length = 255)
    private String login;

    @JsonIgnore
    @Column(name = "password", length = 255)
    private String password;

    @Column(name = "role", length = 255)
    @Enumerated(EnumType.STRING)
    private Role role;
}
