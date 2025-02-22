import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Todo } from 'app/shared/types/Todo.type';


@Component({
  selector: 'app-todo-data-form',
  templateUrl: './todo-data-form.component.html',
  styleUrls: ['./todo-data-form.component.css']
})
export class TodoDataFormComponent implements OnInit {
  todoForm!:FormGroup;

  @Input() buttonText: string;
  @Input() currentName: string;
  @Input() currentDescription: string;
  @Input() currentDue: string;

  @Output()
  onSubmit:EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor(private formBuilder: FormBuilder) {
    this.todoForm = this.formBuilder.group({
      name: '',
      description: '',
      due: ''
    });
   }

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      name: this.currentName,
      description: this.currentDescription,
      due: this.currentDue
    });

  }

  onButtonClicked(): void {
    this.onSubmit.emit({
      id: null,
      name: this.todoForm.value.name,
      description: this.todoForm.value.description,
      due: this.todoForm.value.due,
    });

  }
}
