import { DoseVacinacaoDTO } from "./vacinacao.model";

 interface PacienteDTO {
   id: number,
  name: string;
  middleName: string;
  birthDate?: Date;
  cpf: string;
  street: string;
  city: string;
  state: string;
  cell: string;
  phone: string;
  email: string;
  biologicalSex: string;
  vaccineReactionBoolean: string;
  covidSymptoms: string;
  comorbidityBoolean: string;
  positiveCovid: string;
  comorbidity: string[];
  vaccineReaction: string[];
}



interface PacienteRetornoDTO {
  id: number;
  name: string;
  middleName: string;
  birthDate?: Date;
  cpf: string;
  street: string;
  city: string;
  state: string;
  cell: string;
  phone: string;
  email: string;
  biologicalSex: string;
  vaccineReactionBoolean: string;
  covidSymptoms: string;
  comorbidityBoolean: string;
  positiveCovid: string;
  comorbidity: string[];
  vaccineReaction: string[];
  vaccinationDoses: DoseVacinacaoDTO[];
}

export {PacienteDTO, PacienteRetornoDTO}
