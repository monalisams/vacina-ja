package com.monalisa.vacineja.repository;

import com.monalisa.vacineja.entity.VaccinationDose;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VaccinationDoseRepository extends JpaRepository<VaccinationDose, Long> {
}
