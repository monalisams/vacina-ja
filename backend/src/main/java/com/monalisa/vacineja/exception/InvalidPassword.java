package com.monalisa.vacineja.exception;

public class InvalidPassword extends RuntimeException {

    public InvalidPassword(){
        super("Senha inválida.");
    }
}
