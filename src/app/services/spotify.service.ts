import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient,
              ) {   }

    getQuery(query:string) {

      const url=`https://api.spotify.com/v1/${query}`;

      const headers = new HttpHeaders({
        'Authorization' : 'Bearer BQDjOXpWQMnRn5Zx5mWRWwZt81QwLzj4adtcAixgUHylBPqxZG2Jj3sg9LVT7XgaRbGrYxjUON32Y1wnNVc'
      });

      return this.http.get (url, {headers});

    }

   getNewReleases() {
    
   return this.getQuery('browse/new-releases')
        .pipe(map( (data:any)=> data['albums'].items));
  }



  getArtistas(termino:string) {

   return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
         .pipe(map( (data:any)=> data['artists'].items));
  }

  getArtista(id:string) {

   return this.getQuery(`artists/${id}`)
        //  .pipe(map( (data:any)=> data['artists'].items));
  }

  getTopTracks(id:string) {

    return this.getQuery(`artists/${id}/top-tracks?market=us`)
         .pipe(map( (data:any)=> data['tracks']));
   }


}

