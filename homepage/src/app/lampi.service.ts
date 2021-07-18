import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Track } from './types';


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
  
  getPresets(): Observable<string> {
    console.log('lampi-Service');
    return this.http.get<string>(this.presetsUrl)
  }

  getOff() {
    console.log('getOff Service');
    return this.http.get(this.offUrl);
  }

  getOn() {
    console.log('getOn Service');
    return this.http.get(this.onUrl);
  }

  getOnWithParams(track: Track): Observable<any> {
    console.log('getOnWithParams Service');

    var url, intensity, colourValues, body, colour
    var colourOne = []
    var colourTwo = []

    intensity = track.intensity
    colourValues = track.colour
    colourValues = colourValues.match(/\d{1,3}/g)
    for (var i=0; i<colourValues.length; i++){
        if(i<3)
          colourOne.push(colourValues[i])
        else
          colourTwo.push(colourValues[i])
    }
    console.log('getOnWithParams colourOne, ' + colourOne);
    console.log('getOnWithParams colourTwo, ' + colourTwo);
    console.log('getOnWithParams intensity, ' + intensity);

    if (track.pattern === "banner"){
        url = this.onBannerUrl
        body = {colourOne, colourTwo, intensity}
    }
    else if(track.pattern === "pulse"){
        url = this.onPulseUrl
        colour = colourOne
        body = {colour, intensity}
    }
    else {
        url = this.onSolidUrl
        colour = colourOne
        body = {colour, intensity}
    };

    return this.http.post<string>(
      url,
      body,
      httpOptions,
    );
  }

}
