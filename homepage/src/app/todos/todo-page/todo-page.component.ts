import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'app/shared/types/Todo.type';
import { TodosService } from 'app/shared/services/todos.service'
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {
  
  todoList: Todo[] = [];

  constructor(
    private service: TodosService,
  ) { }

  ngOnInit(): void {
    this.service.getTodos$().subscribe(
      (todos: Todo[]) => {
        this.todoList = [...todos];
      }
    );
  };

  drop(event: CdkDragDrop<Todo[]>) {
    if (!this.todoList || this.todoList.length === 0) return;
    moveItemInArray(this.todoList, event.previousIndex, event.currentIndex);
  }

}
