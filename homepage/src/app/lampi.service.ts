import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};


@Injectable({
  providedIn: 'root'
})
export class LampiService {

  onUrl      = '/api/on';
  offUrl     = '/api/off';
  presetsUrl = '/api/presets';
  onSolidUrl = '/api/onSolid';


  constructor(
    private http: HttpClient,
  ) { }
  
  getOn() {
    console.log('getOn Service!');
    return this.http.get(this.onUrl);
  }

  getOff() {
    console.log('getOff Service!');
    return this.http.get(this.offUrl);
  }

  getPresets(): Observable<string> {
    console.log('lampi-Service!');
    return this.http.get<string>(this.presetsUrl)
  }

  postOnSolid() {
    let colour = "27,242,242"
    let intensity = "0.6"
    console.log('postOnSolid Service!');
    this.http.post(
        this.onSolidUrl,
        {colour, intensity},
        httpOptions,
      );
  }


}
