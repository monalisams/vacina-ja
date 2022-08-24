package com.monalisa.vacineja.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.monalisa.vacineja.enums.BiologicalSex;
import com.monalisa.vacineja.enums.Comorbidity;
import com.monalisa.vacineja.enums.State;
import com.monalisa.vacineja.enums.VaccineReaction;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="patient")
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id", nullable = false)
    private Long id;

    @Column(name = "name", length = 254)
    private String name;

    @Column(name = "middle_name", length = 254)
    private String middleName;

    @Column(name = "cpf", length = 20)
    private String cpf;

    @Column(name = "birth_date", length = 254)
    private LocalDate birthDate;

    @Column(name = "phone", length = 20)
    private String phone;

    @Column(name = "cell", length = 20)
    private String cell;

    @Column(name = "email", length = 254)
    private String email;

    @Enumerated(EnumType.STRING)
    @Column(name = "biological_sex", length = 254)
    private BiologicalSex biologicalSex;

    @Column(name = "street", length = 254)
    private String street;

    @Column(name = "city", length = 254)
    private String city;

    @Enumerated(EnumType.STRING)
    @Column(name = "state", length = 254)
    private State state;

    @ElementCollection(targetClass=VaccineReaction.class)
    @Enumerated(EnumType.STRING)
    @CollectionTable(name="patient_vaccine_reaction")
    @Column(name="vaccine_reaction")
    private List<VaccineReaction> vaccineReaction;


    @Column(name = "vaccine_reaction_boolean", length = 254)
    private Boolean vaccineReactionBoolean;

    @Column(name = "covid_symptoms", length = 254)
    private Boolean covidSymptoms;

    @Column(name = "positive_covid", length = 254)
    private Boolean positiveCovid;

    @ElementCollection(targetClass=Comorbidity.class)
    @Enumerated(EnumType.STRING)
    @CollectionTable(name="patient_comobidity")
    @Column(name="comorbidity")
    private List<Comorbidity> comorbidity;

    @Column(name = "comorbidity_boolean", length = 254)
    private Boolean comorbidityBoolean;

    @OneToMany(mappedBy = "patient", cascade = CascadeType.REMOVE)
    @JsonIgnoreProperties("patient")
    private List<VaccinationDose> vaccinationDoses;

    @Override
    public String toString() {
        return "Patient{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", middleName='" + middleName + '\'' +
                ", cpf='" + cpf + '\'' +
                ", birthDate=" + birthDate +
                ", phone='" + phone + '\'' +
                ", cell='" + cell + '\'' +
                ", email='" + email + '\'' +
                ", biologicalSex='" + biologicalSex + '\'' +
                ", street='" + street + '\'' +
                ", city='" + city + '\'' +
                ", state='" + state + '\'' +
                ", vaccineReaction='" + vaccineReaction + '\'' +
                ", vaccineReactionBoolean='" + vaccineReactionBoolean + '\'' +
                ", covidSymptoms='" + covidSymptoms + '\'' +
                ", positiveCovid='" + positiveCovid + '\'' +
                ", comorbidity='" + comorbidity + '\'' +
                ", comorbidityBoolean='" + comorbidityBoolean + '\'' +
                ", vaccinationDoses=" + vaccinationDoses +
                '}';
    }
}
