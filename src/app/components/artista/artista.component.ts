import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
})

export class ArtistaComponent  {

 artista:any ={};
 loading!:boolean;
  topTracks: any[] = [];

  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService) {

this.router.params.subscribe (params => {
  this.getArtista (params ['id']);
  this.getTopTracks (params ['id']);
 });

}


   getArtista (id:string) {
    this.loading=true;

    this.spotify.getArtista(id)
    .subscribe (artista=>{
      this.loading=false;
      console.log(artista);
      this.artista = artista;

    });

   }

   getTopTracks (id:string){

    this.spotify.getTopTracks(id)
    .subscribe (topTracks=>{
      console.log(topTracks);
      this.topTracks = topTracks;

    });

   }
}
