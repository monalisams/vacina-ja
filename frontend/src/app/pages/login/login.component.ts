import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

/** @title Form field appearance variants */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  hide = true;

  login: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router){

  }

  loginUser(){
    this.userService.login(this.login, this.password)
    .subscribe((user: {token: string, roles: string[], login: string})=>{
      console.log(user.roles)
      if(user.roles.indexOf('ADMIN') > -1){
        this.router.navigateByUrl("usuario/menu")
      }else{
        this.router.navigateByUrl("/paciente/lista")
      }
    })
  }

}
