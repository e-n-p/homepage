import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Track } from './types';


@Injectable({
  providedIn: 'root'
})
export class TracksService {

  constructor(
    private http: HttpClient,

  )  {}

    url = '/api/tracks';

  getTracks(): Observable<Track[]> {
    console.log('getTracks Service!');
    return this.http.get<Track[]>(this.url);

  }


  
}
