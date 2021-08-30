import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserData } from '../models/user-data';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  dataSource: MatTableDataSource<UserData>;

  displayedColumns: string[] = [
    'nome',
    'cpf',
    'dataNascimento',
    'estado',
    'dataVacinacao',
    'unidade',
    'fabricante',
    'botoes',
  ];

  constructor(private service: UsuarioService) {
    this.dataSource = new MatTableDataSource<UserData>(this.service.usuarios);
  }

  ngOnInit(): void {
    console.log('init lista');
  }

  ngOnDestroy(): void {
    console.log('destroy lista');
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deletar(i: number) {
    const indice = this.indice(i);
    this.service.deletar(indice);
    this.dataSource.data = this.service.usuarios;
  }

  indice(i: number) {
    return this.paginator.pageIndex * this.paginator.pageSize + i;
  }
}
