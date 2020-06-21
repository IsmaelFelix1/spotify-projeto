import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { PlaylistComponent } from './views/playlist/playlist.component';
import { HttpClientModule } from '@angular/common/http';
import { MusicaComponent } from './views/musica/musica.component';
import { CreatePlaylistComponent } from './views/playlist/create-playlist/create-playlist.component';
import { CreateMusicaComponent } from './views/musica/create-musica/create-musica.component';
import { HomeComponent } from './views/home/home.component';
import { FaqComponent } from './views/faq/faq.component';
import { UsuarioCreateComponent } from './views/usuario-create/usuario-create.component';
import { UsuarioLoginComponent } from './views/usuario-login/usuario-login.component';
import { DetailPlaylistComponent } from './views/playlist/detail-playlist/detail-playlist.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    PlaylistComponent,
    MusicaComponent,
    CreatePlaylistComponent,
    CreateMusicaComponent,
    HomeComponent,
    FaqComponent,
    UsuarioCreateComponent,
    UsuarioLoginComponent,
    DetailPlaylistComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
