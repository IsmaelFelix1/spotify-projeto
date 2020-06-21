import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Musica } from '../../shared/musica/musica-model';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {

  API = "http://127.0.0.1:8000/api/playlists/";
  headers = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

    getMusic(id): Observable<Musica>{
      return this.http.get<Musica>(this.API + id + "/musica/",
      {headers: this.headers});
    }
    
}
