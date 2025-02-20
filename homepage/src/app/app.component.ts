import { Component } from '@angular/core';
import { TodosService } from 'app/shared/services/todos.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private todosService: TodosService) {
    
  }

  title = 'homepage';
}
