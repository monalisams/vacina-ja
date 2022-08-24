import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PacienteDTO, PacienteRetornoDTO } from '../pages/models/paciente.model';

@Injectable({ providedIn: 'root' })
export class PacienteService {

  constructor(private httpClient: HttpClient){

  }




  save(paciente: PacienteDTO): Observable<PacienteRetornoDTO>{
    return this.httpClient.post<PacienteRetornoDTO>(environment.api + '/patient', paciente, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    })
  }

  delete(id: number): Observable<any>{
    return this.httpClient.delete(environment.api + '/patient/' + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    })
  }

  update(paciente: PacienteDTO, id: number): Observable<PacienteRetornoDTO>{
    return this.httpClient.put<PacienteRetornoDTO>(environment.api + '/patient/' + id, paciente, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    })
  }

  getId(id: number): Observable<PacienteRetornoDTO>{
    return this.httpClient.get<PacienteRetornoDTO>(environment.api + '/patient/' + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    })
  }

  getAll(): Observable<PacienteRetornoDTO[]> {
    return this.httpClient.get<PacienteRetornoDTO[]>(environment.api + '/patient/all', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    })
  }
}
