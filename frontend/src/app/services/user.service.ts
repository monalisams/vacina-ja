import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {tap} from 'rxjs/operators'
import { UserDTO } from '../pages/models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private httpClient: HttpClient){

  }

  login(login: string, password: string): Observable<any>{
    return this.httpClient.post(environment.api + '/users/auth', {login, password})
    .pipe(tap((res: any) => {
      localStorage.setItem("login", res.login);
      localStorage.setItem("token", res.token);
      localStorage.setItem("roles", JSON.stringify(res.roles))
    }));

  }

  save(user: UserDTO): Observable<UserDTO>{
    return this.httpClient.post<UserDTO>(environment.api + '/users', user, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    })
  }


  delete(id: number): Observable<any>{
    return this.httpClient.delete(environment.api + '/users/' + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    })
  }

  update(user: UserDTO, id: number): Observable<UserDTO>{
    return this.httpClient.put<UserDTO>(environment.api + '/users/' + id, user, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    })
  }

  getId(id: number): Observable<UserDTO>{
    return this.httpClient.get<UserDTO>(environment.api + '/users/' + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    })
  }

  getAll(): Observable<UserDTO[]> {
    return this.httpClient.get<UserDTO[]>(environment.api + '/users/all', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    })
  }

  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("roles");
  }

  isLogedId(){
    return localStorage.getItem("token") != null;
  }

  getRoles(): string[] {
    let roles = localStorage.getItem("roles");
    return roles == null ? [] : JSON.parse(roles);
  }

  hasRoles(roles: string[]): boolean{
    return !!this.getRoles().find(r => roles.indexOf(r) > -1);
  }

  getLogin(): string | null{
    return localStorage.getItem("login");
  }


}
