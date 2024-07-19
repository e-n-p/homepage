import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Todo } from 'app/shared/types/Todo.type';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  //TODO move to config /env
  url ='/api/todos';
  private todoListSubject$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  private todoList$ = this.todoListSubject$.asObservable();

  constructor(
    private http: HttpClient,
  ) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }

  refreshTodos(): Observable<Todo[]> {
    return this.getTodos().pipe(
      tap((todos: Todo[]) => this.todoListSubject$.next(todos) )
    );
  }

  getTodoList$(): Observable<Todo[]>{
    return this.todoList$;
  }

  getTodoById(id: string): Observable<Todo> {
    return this.http.get<Todo>(`/api/todo/${id}`);
  }

  deleteTodo(id: string): Observable<string>{
    return this.http.delete<string>(`/api/todo/${id}`)
  }

  createNewTodo(name: string, description: string, due: Date): Observable<Todo>{
    return this.http.post<Todo>(
      '/api/newTodo',
      {name, description, due},
      httpOptions,
    );
  }

  editTodo(id: string, name: string, description: string, due: Date): Observable<Todo>{
    return this.http.post<Todo>(
      `/api/todo/${id}`,
      { name, description, due },
      httpOptions,
    );
  }

}
