import { CommonModule } from "@angular/common";
import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormularioComponent } from "../pages/formulario/formulario.component";
import { ImprimirComponent } from "../pages/imprimir/imprimir.component";
import { ListaComponent } from "../pages/lista/lista.component";
import { MaterialModule } from "../material.module";
import { LoginComponent } from "../pages/login/login.component";
import { FormularioVacinaComponent } from "../pages/formularioVacina/formularioVacina.component";
import { FormularioAcessoComponent } from "../pages/formularioLogin/formularioAcesso.component";
import { ListaAcessos } from "../pages/listaUsuarios/listaUsuarios.component";
import { RouteGuardService } from "../services/route-guard.service";
import { Page404 } from "../pages/404/page404.component";
import { FormUser } from "../pages/formUserAdmin/form-user-adm.component";
import { Home } from "../pages/home/home.components";



const appRoutes :Routes = [
  {path: '', component: Home},

  {path: 'login', component: LoginComponent},
  {path: 'paciente/cadastro', component: FormularioComponent, canActivate: [RouteGuardService], data: { role: ['ADMIN', 'USER'] } },
  {path: 'paciente/lista', component: ListaComponent, canActivate: [RouteGuardService], data: { role: ['ADMIN', 'USER'] } },
  {path: 'paciente/editar/:id', component: FormularioComponent , canActivate: [RouteGuardService], data: { role: ['ADMIN', 'USER'] } },
  {path: 'paciente/imprimir/:id', component: ImprimirComponent, canActivate: [RouteGuardService], data: { role: ['ADMIN', 'USER'] } },
  {path: 'vacina/cadastro/:id', component: FormularioVacinaComponent, canActivate: [RouteGuardService], data: { role: ['ADMIN', 'USER'] } },
  {path: 'usuario/menu', component: FormUser , canActivate: [RouteGuardService], data: { role: ['ADMIN'] } },
  {path: 'usuario/cadastro', component: FormularioAcessoComponent , canActivate: [RouteGuardService], data: { role: ['ADMIN'] } },
  {path: 'usuario/lista', component: ListaAcessos , canActivate: [RouteGuardService], data: { role: ['ADMIN'] } },
  {path: 'usuario/editar/:id' , component: FormularioAcessoComponent, canActivate: [RouteGuardService], data: { role: ['ADMIN'] }},

  {path: '**', component: Page404},
 ]

 @NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    RouteGuardService
  ]
})

export class AppRouter {}
