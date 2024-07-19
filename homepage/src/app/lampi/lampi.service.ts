import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Track } from 'app/shared/types/Track.type';
import { API_LAMPI } from 'app/shared/config';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};


@Injectable({
  providedIn: 'root'
})
export class LampiService {

  constructor(
    private http: HttpClient,
  ) { }
  
  getTracks(): Observable<Track[]> {
    console.log('getTracks Service!');
    return this.http.get<Track[]>(API_LAMPI.getTracksUrl);

  }

  getOff(): Observable<any> {
    console.log('getOff Service');
    return this.http.get(API_LAMPI.offUrl);
  }

  getOn(): Observable<any> {
    console.log('getOn Service');
    return this.http.get(API_LAMPI.onUrl);
  }

  getStatusWithArgs(): Observable<Array<string>> {
    console.log('getStatusWithArgs Service');
    return this.http.get<Array<string>>(API_LAMPI.getStatusWArgs);
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
        url = API_LAMPI.onBannerUrl
        body = {colourOne, colourTwo, intensity}
    }
    else if(track.pattern === "pulse"){
        url = API_LAMPI.onPulseUrl
        colour = colourOne
        body = {colour, intensity}
    }
    else {
        url = API_LAMPI.onSolidUrl
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
