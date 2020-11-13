import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../types';
import { TodosService } from '../todos.service'

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
    private service: TodosService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getTodoById(id)
      .subscribe(
        todo => this.todo = todo
    );
  }

  onSubmit({name, description, due}): void {
    console.log("before service call");
    this.service.editTodo(this.todo.id, name, description, due)
    .subscribe(() =>{
      this.router.navigateByUrl('/todo')
    });
    console.log("after service call");
  }

}
