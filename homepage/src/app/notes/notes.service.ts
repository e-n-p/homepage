import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { API_CONFIG } from 'app/shared/config';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'text/plain',
  })
};

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(
    private http: HttpClient
  ) { }

  getNotes(): Observable<any>{
    return this.http.get(API_CONFIG.notes);
  }

  updateNotes(text: string): Observable<any> {
    return this.http.post<string>(
      API_CONFIG.notes,
      text,
      httpOptions
    );
  }

}
