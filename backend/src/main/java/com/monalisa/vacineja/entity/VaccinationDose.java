package com.monalisa.vacineja.entity;

import com.monalisa.vacineja.enums.Manufacturer;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="vaccination_doses")
public class VaccinationDose {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id", nullable = false)
    private Long id;

    @Column(name="doses_number")
    private int doseNumber;

    @Column(name = "date_vaccination_1")
    private LocalDate dateVaccination1;

    @Enumerated(EnumType.STRING)
    @Column(name = "manufacturer_1", length = 25)
    private Manufacturer manufacturer1;

    @Column(name = "batch_1", length = 25)
    private String batch1;

    @Column(name = "unity_1", length = 100)
    private String unity1;

    @Column(name = "vaccinator_1", length = 25)
    private String vaccinator1;

    @Column(name = "professional_record_1", length = 100)
    private String professionalRecord1;

    @ManyToOne
    @JoinColumn(name= "patient_id")
    private Patient patient;


    @Override
    public String toString() {
        return "VaccinationDose{" +
                "id=" + id +
                ", doseNumber=" + doseNumber +
                ", dateVaccination1=" + dateVaccination1 +
                ", manufacturer1='" + manufacturer1 + '\'' +
                ", batch1='" + batch1 + '\'' +
                ", unity1='" + unity1 + '\'' +
                ", vaccinator1='" + vaccinator1 + '\'' +
                ", professionalRecord1='" + professionalRecord1 + '\'' +
                ", patient=" + patient +
                '}';
    }
}
