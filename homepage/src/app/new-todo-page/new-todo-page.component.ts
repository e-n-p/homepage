import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-todo-page',
  templateUrl: './new-todo-page.component.html',
  styleUrls: ['./new-todo-page.component.css']
})
export class NewTodoPageComponent implements OnInit {

  constructor(
	private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
	alert('Creating new Todo');
	this.router.navigateByUrl('/todo');
  }

}
