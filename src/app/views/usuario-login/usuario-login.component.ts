import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UsuariosService } from '../services/usuario/usuarios.service';

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.css']
})
export class UsuarioLoginComponent implements OnInit {

  UserLoginForm: FormGroup;

  constructor(private fb:FormBuilder, 
              private us: UsuariosService) { }

  ngOnInit(): void {
    this.UserLoginForm = this.fb.group({
      email: [''],
      senha: ['']
    });
  }
  getUsuario(){
    console.log(this.UserLoginForm); //aqui tu vai ver lá no console que o formulario está carregando

  }

}
