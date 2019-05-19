import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; // [1.1e]
import {Observable} from 'rxjs'; // [1.1e]
import {Show} from './show';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {}

 // [1.1d]
  getShows(u): Observable<Show[]> {
    return this.http.get<Show[]>('https://api.tvmaze.com/search/shows?q=' + u);
  }
}
