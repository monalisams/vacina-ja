import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { NgxMaskModule } from 'ngx-mask';
import { ListaComponent } from './lista/lista.component'
import { FormularioComponent } from './formulario/formulario.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ImprimirComponent } from './imprimir/imprimir.component';




const appRoutes :Routes = [
 {path: '', component: ListaComponent},
 {path: 'formulario', component: FormularioComponent },
 {path: 'editar/:id', component: FormularioComponent },
 {path:'imprimir/:id', component: ImprimirComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListaComponent,
    ImprimirComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    NgxMaskModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    CommonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
