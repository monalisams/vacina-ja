package com.monalisa.vacineja.service;

import com.monalisa.vacineja.dto.PatientDTO;
import com.monalisa.vacineja.entity.Patient;


import java.util.List;
import java.util.Optional;

public interface PatientService {

    Patient savePatient(PatientDTO dto);
    Optional<Patient> deletePatient(Long id);
    Optional<Patient> getPatient(Long id);
    Optional<Patient> updatePatient(Long id, PatientDTO dto);
    List<Patient> getPatients();


}
