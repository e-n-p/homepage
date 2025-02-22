import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'app/shared/types/Todo.type';
import { TodosService } from 'app/shared/services/todos.service'

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
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id)
    this.service.getTodoById(id)
      .subscribe(
        todo => this.todo = todo
    );
  }

  onSubmit({name, description, due}): void {
    this.service.editTodo(this.todo.id, name, description, due)
    .subscribe(() =>{
      this.router.navigateByUrl('/homepage')
    });
  }

}
