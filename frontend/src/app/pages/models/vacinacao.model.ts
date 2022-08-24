interface DoseVacinacaoDTO {
  id: number;
  dateVaccination1?: Date;
  manufacturer1: string;
  batch1:string;
  unity1: string;
  vaccinator1: string;
  professionalRecord1: string;
  patientId: number;
  doseNumber: number;
}

interface DoseVacinacaoRetornoDTO {
  id: number;
  dateVaccination1?: Date;
  manufacturer1: string;
  batch1:string;
  unity1: string;
  vaccinator1: string;
  professionalRecord1: string;
  patientId: number;
  doseNumber: number;
}
export {DoseVacinacaoDTO, DoseVacinacaoRetornoDTO}
