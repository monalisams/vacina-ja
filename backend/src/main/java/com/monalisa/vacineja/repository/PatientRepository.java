package com.monalisa.vacineja.repository;

import com.monalisa.vacineja.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository extends JpaRepository<Patient, Long> {
}
