package com.monalisa.vacineja.controller;


import com.monalisa.vacineja.exception.InvalidPassword;
import com.monalisa.vacineja.dto.ApiErrors;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.List;
import java.util.stream.Collectors;

@RestControllerAdvice
public class ApplicationControllerAdvice {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ApiErrors handleMethodNotValidException(MethodArgumentNotValidException ex){
         List<String> errors = ex.getBindingResult()
                 .getAllErrors()
                 .stream()
                 .map(DefaultMessageSourceResolvable::getDefaultMessage)
                 .collect(Collectors.toList());
         return new ApiErrors(errors);
    }


    @ExceptionHandler({UsernameNotFoundException.class, InvalidPassword.class})
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    public ApiErrors handleResponseStatusException(){
       return new ApiErrors(List.of("Login/Senha incorretos "));
    }
}