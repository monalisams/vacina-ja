import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { UserData } from '../models/user-data';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-imprimir',
  templateUrl: './imprimir.component.html',
  styleUrls: ['./imprimir.component.css'],
})
export class ImprimirComponent implements OnInit {
  id?: number;

  usuario?: UserData;

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

  ngOnInit(): void {}

  imprimir() {
    window.print();
  }
}
