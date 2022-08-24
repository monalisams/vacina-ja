CREATE DATABASE vacineJa;
use vacineJa;

CREATE TABLE `patient` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `middle_name` varchar(255) ,
    `cpf` varchar(20),
    `birth_date` date,
    `phone` varchar(20),
    `cell` varchar(20),
    `email` varchar(255),
    `biological_sex` varchar(255),
    `street` varchar(255),
    `city` varchar(255),
    `state` varchar(255),
    `vaccine_reaction_boolean` boolean,
    `vaccine_reaction` varchar(255),
    `covid_symptoms` boolean,
    `positive_covid` boolean,
    `comorbidity_boolean` boolean,
    `comorbidity` varchar(255)
);

CREATE TABLE `vaccination_doses` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `date_vaccination_1` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `manufacturer_1` varchar(255),
    `batch_1` varchar(150),
    `unity_1` varchar(255),
    `vaccinator_1` varchar(25),
    `professional_record_1` varchar(25),
    `date_vaccination_2` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `manufacturer_2` varchar(255),
    `batch_2` varchar(150),
    `unity_2` varchar(255),
    `vaccinator_2` varchar(25),
    `professional_record_2` varchar(25)
);

CREATE TABLE `users` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `login` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL,
    `role` varchar(255) NOT NULL
);

