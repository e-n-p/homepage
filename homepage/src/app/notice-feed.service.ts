import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticeFeedService {

  constructor(
    private http: HttpClient
  ) { }

  getLatest(): Observable<any>{
    return this.http.get('assets/output.json')
  }
}