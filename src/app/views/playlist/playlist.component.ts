import { Playlist } from './../shared/playlist/playlist-model';
import { PlaylistService } from './../services/playlist/playlist.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  playlist: Playlist[];
  error: any;
  constructor(private playlistservice: PlaylistService,
              private router: Router) { }

  ngOnInit(): void {
  this.mostrarplaylist();
  }

  navigateToCreatePlaylist(): void {
    this.router.navigate(['/create'])
  }

  mostrarplaylist(){
    this.playlistservice.MostrarTodaPlaylist().subscribe(
      (playlist: Playlist[]) => this.playlist = playlist,
      (error: any) => this.error = error
    );
  }

  playlistClick = (playlist) => {
    this.playlistservice.getOnePlaylist(playlist.id).subscribe(
      data => {
        //console.log(data)
        this.router.navigate(["/detail-playlist/", playlist.id])
      },
      error => {
        console.log("Aconteceu algum erro.", error.message);
      }
    );
  };
}
