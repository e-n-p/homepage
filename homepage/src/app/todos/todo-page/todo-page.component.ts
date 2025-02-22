import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'app/shared/types/Todo.type';
import { TodosService } from 'app/shared/services/todos.service'

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {
  
  todoList$: Observable<Todo[]> = this.service.getTodoList$();

  constructor(
    private service: TodosService,
  ) { }

  ngOnInit(): void {
    this.service.refreshTodos().subscribe();
  }

}
