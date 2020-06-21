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
    this.UserCreateForm = this.fb.group({
      username: [''],
      email: [''],
      senha: [''],
      apelido: [''],
      genero:[''],
      data: ['']
    });
  }

  inserir(){
    this.us.CreateUsuario(this.UserCreateForm.value).subscribe(res => {
      this.usuario = res;
    },
    error =>{
      console.log(error);
    });

    alert("Cadastro com sucesso!");
    this.router.navigate(['/playlist']);


    //Aqui quando a parte da API estiver pronta, vai enviar para o banco com esse comando
    //this.us.insert(this.UserCreateForm.value);
  }
}
