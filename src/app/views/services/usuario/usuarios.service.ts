import { Usuario } from './../../shared/usuario/usuario-models';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  API = "http://127.0.0.1:8000/api/v2/usuarios/";
  headers: HttpHeaders = new HttpHeaders({"Content-Type": "application/json" ,
                                          Authorization: "Token 69a7b8caa8f919e06fd966a946565ea022213b15"});
  constructor(private router: Router,
              private http: HttpClient) { }

  insert(){
    //aqui insere ao banco
  }
  
  // criar usuario
  CreateUsuario(resquet: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.API, resquet, {headers: this.headers});
  }

  loginUsuario(resquet: Usuario){
    const body = JSON.stringify(resquet)
    return this.http.post(this.API, body, {headers: this.headers})
  }

  //criar outro metodo para >>get<< para usar no usuario-login.component.ts
}
