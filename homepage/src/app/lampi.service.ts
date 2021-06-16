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
  onPulseUrl = '/api/onPulse';
  onBannerUrl = '/api/onBanner';

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
  
  postOnSolid(): Observable<any> {
    let colour = [27,242,242]
    let intensity = "0.6"
    console.log('postOnSolid Service!');
    return this.http.post<string>(
        this.onSolidUrl,
        {colour, intensity},
        httpOptions,
      );
  }

  postOnPulse(): Observable<any> {
    let colour = [27,242,242]
    let intensity = "0.6"
    console.log('postOnPulse Service!');
    return this.http.post<string>(
        this.onPulseUrl,
        {colour, intensity},
        httpOptions,
      );
  }

  postOnBanner(): Observable<any> {
    let colourOne = [27,242,242]
    let colourTwo = [56,116,200]
    let intensity = "0.6"
    console.log('postOnBanner Service!');
    return this.http.post<string>(
        this.onBannerUrl,
        {colourOne, colourTwo, intensity},
        httpOptions,
      );
  }

}
