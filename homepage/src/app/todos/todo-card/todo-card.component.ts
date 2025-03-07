import { Component, Input } from '@angular/core';
import { Todo } from 'app/shared/types/Todo.type';
import { TodosService } from 'app/shared/services/todos.service'
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent {
  @Input() aTodo: Todo;

  constructor(
    private service: TodosService,
  ) { }
  

  onDeleteClicked(todoId: number): void {
    this.service.deleteTodo(todoId).pipe(
      switchMap(() => this.service.refreshTodos())
    ).subscribe();
  }


}
