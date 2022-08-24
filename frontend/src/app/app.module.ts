import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { NgxMaskModule } from 'ngx-mask';
import { ListaComponent } from './pages/lista/lista.component'
import { FormularioComponent } from './pages/formulario/formulario.component';
import { CommonModule } from '@angular/common';
import { ImprimirComponent } from './pages/imprimir/imprimir.component';
import { AppRouter } from './router/app.router.module';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormularioVacinaComponent } from './pages/formularioVacina/formularioVacina.component';
import { FormularioAcessoComponent } from './pages/formularioLogin/formularioAcesso.component';
import { ListaAcessos } from './pages/listaUsuarios/listaUsuarios.component';
import { CpfValidator } from './directives/app.cpf-validator';
import { Page404 } from './pages/404/page404.component';
import { FormUser } from './pages/formUserAdmin/form-user-adm.component'
import { Home } from './pages/home/home.components';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListaComponent,
    ImprimirComponent,
    LoginComponent,
    FormularioVacinaComponent,
    FormularioAcessoComponent,
    ListaAcessos,
    CpfValidator,
    Page404,
    FormUser,
    Home
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    CommonModule,
    AppRouter

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
