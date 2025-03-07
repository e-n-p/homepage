import { Component, OnInit } from '@angular/core';
import { Todo, UpdatePriority } from 'app/shared/types/Todo.type';
import { TodosService } from 'app/shared/services/todos.service'
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  todoList: Todo[] = [];

  constructor(
    private service: TodosService
  ) { }

  ngOnInit(): void {
    this.service.refreshTodos().subscribe();
    this.service.getTodoList$().pipe(
      map(todos => [...todos].sort((a, b) => a.priority - b.priority)),
    ).subscribe(sortedTodos => {
      this.todoList = sortedTodos;
    });
  }

  reorderPriority(): UpdatePriority[]{
    var updateList: UpdatePriority[] = [];
    for (let i=0;i<this.todoList.length;i++){
      this.todoList[i].priority = i;
      updateList.push({"id": this.todoList[i].id, "priority": i});
    }
    return updateList;
  }


  drop(event: CdkDragDrop<Todo[]>) {
    if (!this.todoList || this.todoList.length === 0) return;
    moveItemInArray(this.todoList, event.previousIndex, event.currentIndex);
    const updateList = this.reorderPriority();
    this.service.updatePriorities(updateList).subscribe();
  }

}
