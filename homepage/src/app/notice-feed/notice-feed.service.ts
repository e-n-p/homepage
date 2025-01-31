import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { NoticeFeed } from '../shared/types/NoticeFeed.type';
import { API_CONFIG } from 'app/shared/config';

@Injectable({
  providedIn: 'root'
})
export class NoticeFeedService {

  constructor(
    private http: HttpClient
  ) { }

  getLatest(): Observable<NoticeFeed[]>{
    return this.http.get<NoticeFeed[]>('assets/output.json')
  }

  updateFeed(): Observable<String> {
    return this.http.get<String>(API_CONFIG.fetchNoticeFeed)
  }
}