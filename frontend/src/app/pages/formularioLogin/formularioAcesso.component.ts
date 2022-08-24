import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserDTO } from '../models/user.model';

@Component({
  selector: 'app-formularioLogin',
  templateUrl: './formularioAcesso.component.html',
  styleUrls: ['./formularioAcesso.component.css'],
})
export class FormularioAcessoComponent {

  user: UserDTO = {
    id: 0,
    name: '',
    login: '',
    password: '',
    role: '',
  };

  constructor(
    private service: UserService,
    private router: Router,
    private rota: ActivatedRoute
  ){
    this.user.id = rota.snapshot.params.id;
    if(this.user.id){
      this.service.getId(this.user.id).subscribe(u => {
        this.user = u;
      })
    }
  }

  salvar(){
    if(this.user.id){
      this.service.update(this.user, this.user.id).subscribe(v => {
        console.log("usuario atualizada")
        this.router.navigateByUrl('/usuario/lista');
      });
    }else {
      this.service.save(this.user)
      .subscribe(v => {
        console.log("usuario criada")
        this.router.navigateByUrl('/usuario/lista');
      });
    }


  }

}
