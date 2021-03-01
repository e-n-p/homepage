import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {
  
  switchUrl = '/api/switch';
  
  constructor(
    private http: HttpClient,
  ) { }
  
  getSwitch() {
    console.log('getSwitch Service!');
    return this.http.get(this.switchUrl);
  }
}
