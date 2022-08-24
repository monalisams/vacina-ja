import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { VacinacaoService } from "src/app/services/vacinacao.service";
import { PacienteRetornoDTO } from "../models/paciente.model";
import { DoseVacinacaoDTO } from "../models/vacinacao.model";
import { Fabricante, Fabricantes } from "../shared/fabricantes";

@Component({
  selector:'app-formularioVacina',
  templateUrl: './formularioVacina.component.html',
  styleUrls: ['./formularioVacina.component.css']
})

export class FormularioVacinaComponent{

  fabricantes: Fabricante[] = Fabricantes;

  vacina: DoseVacinacaoDTO={
    id: 0,
    doseNumber: 1,
    dateVaccination1: new Date(),
    manufacturer1: '',
    batch1:'',
    unity1: '',
    vaccinator1: '',
    professionalRecord1: '',
    patientId: 0,
  }

  constructor (
    private service: VacinacaoService,
    private router: Router,
    private rota: ActivatedRoute
  ){
    this.vacina.patientId = rota.snapshot.params.id;
  }

  salvar(){
    if(this.vacina.id){
      this.service.update(this.vacina, this.vacina.id).subscribe(v => {
        console.log("vacina atualizada")
        this.router.navigateByUrl('/paciente/lista');
      });
    }else {
      this.service.save(this.vacina)
      .subscribe(v => {
        console.log("vacina criada")
        this.router.navigateByUrl('/paciente/lista');
      });
    }


  }

}
