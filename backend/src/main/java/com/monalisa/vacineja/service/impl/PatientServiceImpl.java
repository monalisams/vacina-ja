package com.monalisa.vacineja.service.impl;

import com.monalisa.vacineja.dto.PatientDTO;
import com.monalisa.vacineja.entity.Patient;
import com.monalisa.vacineja.entity.VaccinationDose;
import com.monalisa.vacineja.mapper.PatientMapper;
import com.monalisa.vacineja.mapper.VaccinationMapper;
import com.monalisa.vacineja.repository.PatientRepository;
import com.monalisa.vacineja.repository.VaccinationDoseRepository;
import com.monalisa.vacineja.service.PatientService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public  class PatientServiceImpl implements PatientService {

    public final PatientRepository patientRepository;

    @Override
    @Transactional
    public Patient savePatient(PatientDTO dto) {
        Patient patient = PatientMapper.INSTANCE.toPatient(dto);
        patientRepository.save(patient);
        return patient;
    }

    @Override
    @Transactional
    public Optional<Patient> deletePatient(Long id) {
        return patientRepository
                .findById(id)
                .map(p -> {
                    patientRepository.delete(p);
                    return p;
                });
    }

    @Override
    @Transactional
    public Optional<Patient> getPatient(Long id) {
        return patientRepository.findById(id);
    }

    @Override
    @Transactional
    public Optional<Patient> updatePatient(Long id, PatientDTO dto) {
        return patientRepository
                .findById(id)
                .map(p -> {
                   Patient patient = PatientMapper.INSTANCE.toPatient(dto);
                   patient.setId(p.getId());
                   patientRepository.save(patient);
                   return patient;
                });
    }



    @Override
    @Transactional
    public List<Patient> getPatients() {
        return patientRepository.findAll();
    }




}
