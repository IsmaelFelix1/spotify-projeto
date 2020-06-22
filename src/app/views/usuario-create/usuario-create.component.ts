import { Router } from '@angular/router';
import { Usuario } from './../shared/usuario/usuario-models';
import { UsuariosService } from './../services/usuario/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

  UserCreateForm: FormGroup;
  usuario: Usuario;

  constructor(private fb:FormBuilder, 
              private us: UsuariosService,
              private router: Router ) { }

  ngOnInit(): void {
    this.CreateUsuario(new Usuario())
  }
  CreateUsuario(usuario: Usuario){
  this.UserCreateForm = this.fb.group({
    nome: [null],
    email: [null],
    senha: [null],
    apelido: [null],
    genero:[null],
    data: [null]
  });
}

  inserir(form: Usuario){
    this.us.CreateUsuario(this.UserCreateForm.value).subscribe(
      data => {
        console.log("adicionado!")
      },
      error =>{
        console.log("Ocorreu algum error" + error.message)
      }
    )

    


    //Aqui quando a parte da API estiver pronta, vai enviar para o banco com esse comando
    //this.us.insert(this.UserCreateForm.value);
  }
}
