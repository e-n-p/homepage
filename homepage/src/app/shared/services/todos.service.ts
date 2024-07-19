import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Todo } from 'app/shared/types/Todo.type';
import { API_CONFIG } from 'app/shared/config';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private todoListSubject$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  private todoList$ = this.todoListSubject$.asObservable();

  constructor(
    private http: HttpClient,
  ) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(API_CONFIG.getTodos);
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
    return this.http.get<Todo>(API_CONFIG.getTodo+id);
  }

  deleteTodo(id: string): Observable<string>{
    return this.http.delete<string>(API_CONFIG.getTodo+id)
  }

  createNewTodo(name: string, description: string, due: Date): Observable<Todo>{
    return this.http.post<Todo>(
      API_CONFIG.newTodo,
      {name, description, due},
      httpOptions,
    );
  }

  editTodo(id: string, name: string, description: string, due: Date): Observable<Todo>{
    return this.http.post<Todo>(
      API_CONFIG.getTodo+id,
      { name, description, due },
      httpOptions,
    );
  }

}
