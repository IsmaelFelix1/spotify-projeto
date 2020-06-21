import { PlaylistComponent } from "./views/playlist/playlist.component";
import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreatePlaylistComponent } from "./views/playlist/create-playlist/create-playlist.component";
import { CreateMusicaComponent } from "./views/musica/create-musica/create-musica.component";
import { HomeComponent } from "./views/home/home.component";
import { FaqComponent } from "./views/faq/faq.component";
import { UsuarioCreateComponent } from './views/usuario-create/usuario-create.component';
import { UsuarioLoginComponent } from './views/usuario-login/usuario-login.component';
import { DetailPlaylistComponent } from './views/playlist/detail-playlist/detail-playlist.component';


const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "create",
    component: CreatePlaylistComponent,
  },
  { path: "home",
    component: HomeComponent },
  {
    path: "createMusica",
    component: CreateMusicaComponent,
  },
  { path: "faq", 
    component: FaqComponent },
  {
    path: "createuser",
    component: UsuarioCreateComponent
  },
  {
    path: "login",
    component: UsuarioLoginComponent
  },
  {
    path: "playlist",
    component: PlaylistComponent
  },
  {
    path: "detail-playlist/:id",
    component: DetailPlaylistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [DetailPlaylistComponent, ]
