package com.monalisa.vacineja.service.impl;

import com.monalisa.vacineja.dto.VaccinatinDTO;
import com.monalisa.vacineja.entity.VaccinationDose;
import com.monalisa.vacineja.mapper.VaccinationMapper;
import com.monalisa.vacineja.repository.PatientRepository;
import com.monalisa.vacineja.repository.VaccinationDoseRepository;
import com.monalisa.vacineja.service.VaccinationDoseService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class VaccinationDoseImpl implements VaccinationDoseService {

    public final VaccinationDoseRepository vaccinationDoseRepository;
    public final PatientRepository patientRepository;

    @Override
    @Transactional
    public Optional<VaccinationDose> saveVaccinationDose(VaccinatinDTO dto) {
        return patientRepository
                .findById(dto.getPatientId())
                .map(p -> {
                    VaccinationDose vaccination = VaccinationMapper.INSTANCE.toVaccination(dto);
                    vaccination.setPatient(p);
                    vaccination.setDoseNumber(p.getVaccinationDoses().size() > 0 ? Collections.max(p.getVaccinationDoses().stream().map(VaccinationDose::getDoseNumber).toList())+1: 1);
                    vaccinationDoseRepository.save(vaccination);
                    return vaccination;
                });
    }

    @Override
    @Transactional
    public Optional<VaccinationDose> deleteVaccinationDose(Long id) {
        return vaccinationDoseRepository
                .findById(id)
                .map(v -> {
                   vaccinationDoseRepository.delete(v);
                   return v;
                });
    }

    @Override
    @Transactional
    public Optional<VaccinationDose> getVaccinationDose(Long id) {
        return vaccinationDoseRepository.findById(id);
    }

    @Override
    @Transactional
    public Optional<VaccinationDose> updateVaccinationDose(Long id, VaccinatinDTO dto) {
        return vaccinationDoseRepository
                .findById(id)
                .map(v -> {
                    VaccinationDose vaccination = VaccinationMapper.INSTANCE.toVaccination(dto);
                    vaccination.setId(v.getId());
                    vaccination.setPatient(v.getPatient());
                    vaccinationDoseRepository.save(vaccination);
                    return vaccination;
                });
    }

    @Override
    @Transactional
    public List<VaccinationDose> getVaccinationDose() {
        return vaccinationDoseRepository.findAll();
    }
}
