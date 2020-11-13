import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Todo } from './types';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  url ='/api/todos';

  constructor(
    private http: HttpClient,
  ) { }

  getTodos(): Observable<Todo[]> {
    console.log('getTodos Service!');
    return this.http.get<Todo[]>(this.url);

  }

  deleteTodo(id: string): Observable<any>{
    return this.http.delete(`/api/todo/${id}`)
  }


  createNewTodo(name: string, description: string, due: Date): Observable<Todo>{
    console.log("in service");
    return this.http.post<Todo>(
      '/api/newTodo',
      {name, description, due},
      httpOptions,
    );

  }

  updateTodo(){

  }

}
