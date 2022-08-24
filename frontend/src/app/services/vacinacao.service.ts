import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { DoseVacinacaoDTO, DoseVacinacaoRetornoDTO } from "../pages/models/vacinacao.model";

@Injectable({providedIn: 'root'})

export class VacinacaoService {

  constructor(private httpClient: HttpClient){

  }

  getAll(): Observable<DoseVacinacaoRetornoDTO[]> {
    return this.httpClient.get<DoseVacinacaoRetornoDTO[]>(environment.api + '/vaccination/all', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    })
  }

  save(vacinacao: DoseVacinacaoDTO): Observable<DoseVacinacaoRetornoDTO>{
    return this.httpClient.post<DoseVacinacaoRetornoDTO>(environment.api + '/vaccination', vacinacao, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    })
  }

  delete(id: number): Observable<any>{
    return this.httpClient.delete(environment.api + '/vaccination/' + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    })
  }

  update(vacina: DoseVacinacaoDTO, id: number): Observable<DoseVacinacaoRetornoDTO>{
    return this.httpClient.put<DoseVacinacaoRetornoDTO>(environment.api + '/vaccination/' + id, vacina, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    })
  }

  getId(id: number): Observable<DoseVacinacaoRetornoDTO>{
    return this.httpClient.get<DoseVacinacaoRetornoDTO>(environment.api + '/vaccination/' + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    })
  }
}
