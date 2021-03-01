import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LampiService {
  
  onUrl = '/api/on';
  
  constructor(
    private http: HttpClient,
  ) { }
  
  getSwitch() {
    console.log('getOn Service!');
    return this.http.get(this.onUrl);
  }
}
