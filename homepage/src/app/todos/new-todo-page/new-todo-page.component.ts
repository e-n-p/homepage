import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodosService } from 'app/shared/services/todos.service'


@Component({
  selector: 'app-new-todo-page',
  templateUrl: './new-todo-page.component.html',
  styleUrls: ['./new-todo-page.component.css']
})
export class NewTodoPageComponent implements OnInit {

  constructor(
    private router: Router,
    private service: TodosService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit({name, description, due}): void {
    this.service.createNewTodo(name, description, due)
    .subscribe(() => {
      this.router.navigateByUrl('/homepage');
    });
  }

}
