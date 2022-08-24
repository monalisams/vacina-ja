import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PacienteDTO, PacienteRetornoDTO } from '../models/paciente.model';
import { PacienteService } from '../../services/paciente.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

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

  isAdmin: boolean = false;

  name: string|null = null;

  dataSource: MatTableDataSource<PacienteRetornoDTO>;

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

  constructor(private service: PacienteService, private userService: UserService, private router: Router) {
    this.dataSource = new MatTableDataSource<PacienteRetornoDTO>();
    this.isAdmin = userService.hasRoles(["ADMIN"]);
    this.name = userService.getLogin();
  }

  ngOnInit(): void {
    console.log('init lista');
    this.listar();
  }

  listar(){
    this.service.getAll().subscribe(items => this.dataSource.data = items)
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

  deletar(id: number) {
   this.service.delete(id).subscribe(()=> {
     this.listar()
   });

  }

  logout(){
    this.userService.logout();
    this.router.navigateByUrl("/")
  }



}
