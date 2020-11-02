import { Component, OnInit } from '@angular/core';
import { Todo } from '../types';
import { fakeTodos } from '../fake-data'

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {
  
  todos: Todo[] = [];
  
  constructor() { }

  ngOnInit(): void {
	  this.todos = fakeTodos;
  }
  
  onDeleteClicked(todoId: String): void{
    alert(`Deleting todo ${todoId}`)
  }

}
