package com.monalisa.vacineja.controller;

import com.monalisa.vacineja.dto.PatientDTO;
import com.monalisa.vacineja.entity.Patient;
import com.monalisa.vacineja.service.PatientService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("api/patient")
@RequiredArgsConstructor
public class PatientController {

    private final PatientService service;

    @PostMapping
    @ResponseStatus(HttpStatus.ACCEPTED)
    public Patient savePatient(@RequestBody @Valid PatientDTO dto){
        return service.savePatient(dto);
    };

    @DeleteMapping("/{id}")
    public void deletePatient(@PathVariable Long id){
        service
                .deletePatient(id)
                .orElseThrow(() ->
                        new ResponseStatusException(HttpStatus.NOT_FOUND, "Paciente não encontrado."));
    };

    @GetMapping("/{id}")
    public Patient getPatient(@PathVariable Long id){
        return service
                .getPatient(id)
                .orElseThrow(() ->
                        new ResponseStatusException(HttpStatus.NOT_FOUND, "Paciente não encontrado."));

    };

    @PutMapping("/{id}")
    public Patient updatePatient(@PathVariable Long id, @RequestBody @Valid PatientDTO dto){
        return service
                .updatePatient(id, dto)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"Paciente não encontrado."));
    };

    @GetMapping("/all")
    public List<Patient> getPatients(){
        return service
                .getPatients();
    };
}
