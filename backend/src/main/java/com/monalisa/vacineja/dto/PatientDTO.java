package com.monalisa.vacineja.dto;

import com.monalisa.vacineja.enums.BiologicalSex;
import com.monalisa.vacineja.enums.Comorbidity;
import com.monalisa.vacineja.enums.State;
import com.monalisa.vacineja.enums.VaccineReaction;
import lombok.*;
import org.hibernate.validator.constraints.br.CPF;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.List;

@Data
public class PatientDTO {
    @NotEmpty(message = "{field.name.mandatory}")
    private String name;

    @NotEmpty(message = "{field.lastname.mandatory}")
    private String middleName;

    @NotEmpty(message = "{field.cpf.mandatory}")
    @CPF(message = "{field.cpf.invalid}")
    private String cpf;

    @NotNull(message = "{field.birth.mandatory}")
    private LocalDate birthDate;

    @NotNull(message = "{field.phone.mandatory}")
    private String phone;

    @NotNull(message = "{field.phone.mandatory}")
    private String cell;

    @Email(message = "{field.email.invalid}")
    @NotEmpty(message = "{field.email.mandatory}")
    private String email;

    @NotNull(message = "{field.biologic.mandatory}")
    private BiologicalSex biologicalSex;

    @NotNull(message = "{field.street.mandatory}")
    private String street;

    @NotNull(message = "{field.city.mandatory}")
    private String city;

    @NotNull(message = "{field.state.mandatory}")
    private State state;

    @NotNull(message = "{field.vaccineReaction.mandatory}")
    private List<VaccineReaction> vaccineReaction;

    @NotNull(message = "{field.vaccineReaction.mandatory}")
    private Boolean vaccineReactionBoolean;

    @NotNull(message = "{field.covidSymptoms.mandatory}")
    private Boolean covidSymptoms;

    @NotNull(message = "{field.positiveCovid.mandatory}")
    private Boolean positiveCovid;

    @NotNull(message = "{field.comorbidity.mandatory}")
    private List<Comorbidity> comorbidity;

    @NotNull(message = "{field.comorbidity.mandatory}")
    private Boolean comorbidityBoolean;


}
