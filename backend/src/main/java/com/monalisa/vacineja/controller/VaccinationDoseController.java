package com.monalisa.vacineja.controller;

import com.monalisa.vacineja.dto.VaccinatinDTO;
import com.monalisa.vacineja.entity.Patient;
import com.monalisa.vacineja.entity.VaccinationDose;
import com.monalisa.vacineja.service.VaccinationDoseService;
import com.monalisa.vacineja.service.impl.VaccinationDoseImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("api/vaccination")
@RequiredArgsConstructor
public class VaccinationDoseController {

    private final VaccinationDoseService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public VaccinationDose saveVaccinationDose(@RequestBody @Valid VaccinatinDTO dto) {
        return service
                .saveVaccinationDose(dto)
                .orElseThrow(() ->
                        new ResponseStatusException(HttpStatus.NOT_FOUND, "Paciente não encontrado."));
    };

    @DeleteMapping("/{id}")
    public void deleteVaccinationDose(@PathVariable Long id){
        service
                .deleteVaccinationDose(id)
                .orElseThrow(() ->
                        new ResponseStatusException(HttpStatus.NOT_FOUND, "Dose de vacinação não encontrado."));
    }

    @GetMapping("/{id}")
    public VaccinationDose getVaccinationDose(@PathVariable Long id){
        return service
                .getVaccinationDose(id)
                .orElseThrow(() ->
                        new ResponseStatusException(HttpStatus.NOT_FOUND, "Paciente não encontrado."));

    };

    @PutMapping("/{id}")
    public void updateVaccinationDose(@PathVariable Long id, @RequestBody @Valid VaccinatinDTO dto){
        service
                .updateVaccinationDose(id, dto)
                .orElseThrow(() ->
                        new ResponseStatusException(HttpStatus.NOT_FOUND, "Dose de vacinação não encontrado."));
    }

    @GetMapping("/all")
    public List<VaccinationDose> getVaccinationDoses(){
        return service
                .getVaccinationDose();
    };

}
