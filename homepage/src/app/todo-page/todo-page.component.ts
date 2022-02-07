import { Component, OnInit } from '@angular/core';
import { Todo } from '../types';
import { TodosService } from '../todos.service'

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {
  
  todos: Todo[] = [];
  
  constructor(
    private service: TodosService,
  ) { }

  ngOnInit(): void {
    this.service.getTodos().subscribe(todos => this.todos = todos);
  }
  
  onDeleteClicked(todoId: string): void {
    console.log('onDeleteClicked!');
    this.service.deleteTodo(todoId).subscribe();
    //workaround as filter stopped working
    this.service.getTodos().subscribe(todos => this.todos = todos);
  }

}
