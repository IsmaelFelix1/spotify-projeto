import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Playlist } from '../../shared/playlist/playlist-model';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  ApiPlaylist = "http://127.0.0.1:8000/api/playlists/"
  headers = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient) { }

  //Mostrar todas as Playlist
  MostrarTodaPlaylist(): Observable<any>{
    return this.http.get<any>(this.ApiPlaylist,
      {headers: this.headers} )
  }

  //Mostrar Id 
  getOnePlaylist(id):Observable<any>{
    return this.http.get(this.ApiPlaylist + id + "/musica/",
    {headers: this.headers});
  }

  //Realizar um post da playlist
  PostPlaylist(playlist: Playlist): Observable<Playlist>{
    return this.http.post<Playlist>(this.ApiPlaylist, playlist)
  }

}
