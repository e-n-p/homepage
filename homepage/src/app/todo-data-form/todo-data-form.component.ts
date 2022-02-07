import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../types';


@Component({
  selector: 'app-todo-data-form',
  templateUrl: './todo-data-form.component.html',
  styleUrls: ['./todo-data-form.component.css']
})
export class TodoDataFormComponent implements OnInit {
  @Input() buttonText;
  
  @Input() currentName = '';
  @Input() currentDescription = '';
  @Input() currentDue = '';
    
  name: string = '';
  description: string = '';
  due: string = '';
  
  @Output() onSubmit = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.due = this.currentDue;
  }

  onButtonClicked(): void {
    this.onSubmit.emit({
      id: null,
      name: this.name,
      description: this.description,
      due: this.due,
    });

  }
}
