import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { UserDTO } from "../models/user.model";

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './listaUsuarios.component.html',
  styleUrls: ['./listaUsuarios.component.css'],
})

export class ListaAcessos implements OnInit, AfterViewInit  {
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  isAdmin: boolean = false;

  name: string|null = null;

  dataSource: MatTableDataSource<UserDTO>;

  displayedColumns: string[] = [
    'nome',
    'login',
    'tipoAcesso',
    'botoes'
  ];

  constructor(private service: UserService, private router: Router){
    this.dataSource = new MatTableDataSource<UserDTO>();
    this.isAdmin = service.hasRoles(["ADMIN"]);
    this.name = service.getLogin();
  }
  ngOnInit(): void {
    console.log('init lista');
    this.listar();
  }

  listar(){
    this.service.getAll().subscribe(user => this.dataSource.data = user)
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
    this.service.logout();
    this.router.navigateByUrl("/")
  }
}


