package com.monalisa.vacineja.dto;

import com.monalisa.vacineja.entity.Patient;
import com.monalisa.vacineja.enums.Manufacturer;
import lombok.Data;


import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Data
public class VaccinatinDTO {

    private int doseNumber;

    @NotNull(message = "{field.dateVaccination.mandatory}")
    private LocalDate dateVaccination1;

    @NotNull(message = "{field.manufacturer1.mandatory}")
    private Manufacturer manufacturer1;

    @NotNull(message = "{field.batch1.mandatory}")
    private String batch1;

    @NotNull(message = "{field.unity1.mandatory}")
    private String unity1;

    @NotNull(message = "{field.vaccinator1.mandatory}")
    private String vaccinator1;

    @NotNull(message = "{field.professionalRecord1.mandatory}")
    private String professionalRecord1;

    private Long patientId;



}
