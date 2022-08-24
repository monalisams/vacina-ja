package com.monalisa.vacineja.mapper;

import com.monalisa.vacineja.dto.PatientDTO;
import com.monalisa.vacineja.dto.VaccinatinDTO;
import com.monalisa.vacineja.entity.Patient;
import com.monalisa.vacineja.entity.VaccinationDose;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public abstract class VaccinationMapper {
    public static final VaccinationMapper INSTANCE = Mappers.getMapper(VaccinationMapper.class);

    public abstract VaccinationDose toVaccination(VaccinatinDTO vaccinatinDTO);
}
