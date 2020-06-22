import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MusicaService } from '../../services/musica/musica.service';
import { Musica } from '../../shared/musica/musica-model';

@Component({
  selector: 'app-detail-playlist',
  templateUrl: './detail-playlist.component.html',
  styleUrls: ['./detail-playlist.component.css']
})
export class DetailPlaylistComponent implements OnInit {

  
  musicas: Musica;
  constructor(private route: ActivatedRoute,
              private musicaservice: MusicaService) { }

  ngOnInit(): void {

    this.loadPlaylist();
  }


  loadPlaylist(){
    const id =  this.route.snapshot.paramMap.get('id');
    //console.log(id)

    this.musicaservice.getMusic(id).subscribe(
      data => {
       // console.log(data)
        this.musicas = data
      },
      error =>{
        console.log("Aconteceu algum erro: ", error.message);
      }
    );
  };
  
}

