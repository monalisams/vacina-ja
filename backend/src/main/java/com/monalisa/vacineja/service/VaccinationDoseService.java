package com.monalisa.vacineja.service;

import com.monalisa.vacineja.dto.PatientDTO;
import com.monalisa.vacineja.dto.VaccinatinDTO;
import com.monalisa.vacineja.entity.Patient;
import com.monalisa.vacineja.entity.VaccinationDose;

import java.util.List;
import java.util.Optional;

public interface VaccinationDoseService {

    Optional<VaccinationDose> saveVaccinationDose(VaccinatinDTO dto);
    Optional<VaccinationDose> deleteVaccinationDose(Long id);
    Optional<VaccinationDose> getVaccinationDose(Long id);
    Optional<VaccinationDose> updateVaccinationDose(Long id, VaccinatinDTO dto);
    List<VaccinationDose> getVaccinationDose();
}
