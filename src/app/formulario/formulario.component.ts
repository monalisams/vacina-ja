import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserData } from '../models/user-data';
import { UsuarioService } from '../services/usuario.service';
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
  id?: number;

  estados: Estado[] = Estados;

  listaVacinas: Vacina[] = Vacinas;

  listaComorbidades: Comorbidade[] = Comorbidades;

  fabricantes: Fabricante[] = Fabricantes;

  erro: string = '';

  usuario: UserData = {
    nome: '',
    sobrenome: '',
    cpf: '',
    rua: '',
    cidade: '',
    estado: '',
    celular: '',
    telefone: '',
    email: '',
    sexoBiologico: '',
    teveReacao: '',
    teveSintomas: '',
    temComorbidade: '',
    fabricante: '',
    lote: '',
    unidade: '',
    vacinador: '',
    regProf: '',
    lote2: '',
    vacinador2: '',
    regProf2: '',
    sintomasCovid: '',
    positivoCovid: '',
    comorbidades: [],
    vacinas: [],
  };

  constructor(
    private service: UsuarioService,
    private router: Router,
    private rota: ActivatedRoute
  ) {
    this.id = rota.snapshot.params.id;
    if (this.id) {
      this.usuario = this.service.consultar(this.id);
    }
  }

  salvar() {
    if (this.id) {
      this.service.atualizar(this.usuario, this.id);
    } else {
      this.service.salvar(this.usuario);
    }

    this.router.navigateByUrl('/');
  }

  validar() {}
}
