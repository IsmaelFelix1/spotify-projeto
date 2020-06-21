import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../../services/playlist/playlist.service';
import { Playlist } from '../../shared/playlist/playlist-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.css']
})
export class CreatePlaylistComponent implements OnInit {

  playlist: Playlist
  error: any

  constructor(private servicePlaylist: PlaylistService,
              private router: Router) { }

  ngOnInit(): void {
  }
  

  salvar(){
    this.servicePlaylist.PostPlaylist(this.playlist).subscribe(() =>{
      alert('Produto Criado!')
      this.router.navigate(['/createMusica'])
    })
    

  }
  cancelar(){
    this.router.navigate(['/playlist'])
  }

  //Mostrar Playlist
  mostrarplaylist(){
    this.servicePlaylist.MostrarTodaPlaylist().subscribe(
      (playlist: Playlist) => this.playlist = playlist,
      (error: any) => this.error = error
    );
  }


}
