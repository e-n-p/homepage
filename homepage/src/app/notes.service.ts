import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

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
    return this.http.get('/api/notes');
  }

  updateNotes(text: string): Observable<any> {
    return this.http.post<string>(
      '/api/notes',
      text,
      httpOptions
    );
  }

}
