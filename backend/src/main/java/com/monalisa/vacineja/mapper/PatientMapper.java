package com.monalisa.vacineja.mapper;

import com.monalisa.vacineja.dto.PatientDTO;
import com.monalisa.vacineja.entity.Patient;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public abstract class PatientMapper {
    public static final PatientMapper INSTANCE = Mappers.getMapper(PatientMapper.class);

    public abstract Patient toPatient(PatientDTO patientDTO);
}
