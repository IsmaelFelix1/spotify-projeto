import { Usuario } from '../usuario/usuario-models';
import { Musica } from '../musica/musica-model';

export class Playlist{
    id: number;
    usuario: Usuario[];
    genero: string;
    imagem: string;
    url: string;
    musica: Musica[];
    
}