import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Track } from 'app/shared/types/Track.type';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};


@Injectable({
  providedIn: 'root'
})
export class LampiService {

  onUrl             = '/api/on';
  offUrl            = '/api/off';
  onSolidUrl        = '/api/onSolid';
  onPulseUrl        = '/api/onPulse';
  onBannerUrl       = '/api/onBanner';
  getTracksUrl      = '/api/tracks';
  getStatusWArgs    = '/api/statusWithArgs';

  constructor(
    private http: HttpClient,
  ) { }
  
  getTracks(): Observable<Track[]> {
    console.log('getTracks Service!');
    return this.http.get<Track[]>(this.getTracksUrl);

  }

  getOff(): Observable<any> {
    console.log('getOff Service');
    return this.http.get(this.offUrl);
  }

  getOn(): Observable<any> {
    console.log('getOn Service');
    return this.http.get(this.onUrl);
  }

  getStatusWithArgs(): Observable<Array<string>> {
    console.log('getStatusWithArgs Service');
    return this.http.get<Array<string>>(this.getStatusWArgs);
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
    console.log(">> " + colourOne)
    console.log(">> " + colourTwo)

    return this.http.post<string>(
      url,
      body,
      httpOptions,
    );
  }

}
