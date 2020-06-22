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

  API = 'http://127.0.0.1:8000/api/usuarios/';
  token = 'Token b8883a6a5e9dba39493cdf8728b52bab8292e597'
  headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
  .set('Authorization', this.token );

  constructor(private router: Router,
              private http: HttpClient) { }

  // criar usuario
  CreateUsuario(usuario: Usuario): Observable<any>{
    return this.http.post<any>(this.API, JSON.stringify(usuario), {headers: this.headers});
  }

  loginUsuario(resquet: Usuario){
    const body = JSON.stringify(resquet)
    return this.http.post(this.API, body, {headers: this.headers})
  }

  //criar outro metodo para >>get<< para usar no usuario-login.component.ts
}
