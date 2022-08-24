import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteRetornoDTO } from '../models/paciente.model';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-imprimir',
  templateUrl: './imprimir.component.html',
  styleUrls: ['./imprimir.component.css'],
})
export class ImprimirComponent implements OnInit {
  id?: number;

  usuario?: PacienteRetornoDTO;

  constructor(
    private service: PacienteService,
    private router: Router,
    private rota: ActivatedRoute
  ) {
    this.id = rota.snapshot.params.id;
    if (this.id) {
     this.service.getId(this.id).subscribe(paciente => this.usuario = paciente);
    }
  }

  ngOnInit(): void {}

  imprimir() {
    window.print();
  }
}
