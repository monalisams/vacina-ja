import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteDTO } from '../models/paciente.model';
import { PacienteService } from '../../services/paciente.service';
import { Comorbidade, Comorbidades } from '../shared/comorbidades';
import { Estado, Estados } from '../shared/estados';
import { Fabricante, Fabricantes } from '../shared/fabricantes';
import { Vacina, Vacinas } from '../shared/vacinas';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  estados: Estado[] = Estados;

  listaVacinas: Vacina[] = Vacinas;

  listaComorbidades: Comorbidade[] = Comorbidades;

  fabricantes: Fabricante[] = Fabricantes;

  erro: string = '';

  paciente: PacienteDTO = {
    id: 0,
    name: '',
    middleName: '',
    cpf: '',
    birthDate: new Date(),
    street: '',
    city: '',
    state: '',
    cell: '',
    phone: '',
    email: '',
    biologicalSex: '',
    vaccineReactionBoolean: '',
    covidSymptoms: '',
    comorbidityBoolean: '',
    positiveCovid: '',
    comorbidity: [],
    vaccineReaction: [],

  };

  constructor(
    private service: PacienteService,
    private router: Router,
    private rota: ActivatedRoute
  ) {
    this.paciente.id = rota.snapshot.params.id;
    if(this.paciente.id){
      this.service.getId(this.paciente.id).subscribe(p => {
        this.paciente = p;
      })
    }

  }

  salvar() {
    if (this.paciente.id) {
      this.service.update(this.paciente, this.paciente.id)
      .subscribe(paciente => {
        console.log("Paciente atualizado")
        this.router.navigateByUrl('/paciente/lista');
      });
    } else {
      this.service.save(this.paciente)
      .subscribe(paciente => {
        console.log("Paciente criado")
        this.router.navigateByUrl('/paciente/lista');
      });
    }


  }

  validar() {}
}
