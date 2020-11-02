import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../types';
import { fakeTodos } from '../fake-data'

@Component({
  selector: 'app-edit-todo-page',
  templateUrl: './edit-todo-page.component.html',
  styleUrls: ['./edit-todo-page.component.css']
})
export class EditTodoPageComponent implements OnInit {
	todo: Todo;

  constructor(
		private route: ActivatedRoute,
		private router: Router,
  ) { }

  ngOnInit(): void {
	  const id = this.route.snapshot.paramMap.get('id');
	  this.todo = fakeTodos.find(todo => todo.id === id);
  }

  onSubmit(): void {
		alert('Saving changes');
		this.router.navigateByUrl('/todo')
  }

}
