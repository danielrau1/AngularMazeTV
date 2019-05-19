import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; // [1.1e]
import {Observable} from 'rxjs'; // [1.1e]
import {Show} from './show';
import {Episode} from './episode'; // [2.1g]


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {}

 // [1.1d]
  getShows(u): Observable<Show[]> {
    return this.http.get<Show[]>('https://api.tvmaze.com/search/shows?q=' + u);
  }

  // [2.1d]
  getSeasons(u) {
    return this.http.get('https://api.tvmaze.com/shows/' + u + '/seasons');
  }

  // [2.1g]
  getEpisodes(u): Observable<Episode[]> {
    return this.http.get<Episode[]>('https://api.tvmaze.com/shows/' + u + '/episodes');
  }

}
