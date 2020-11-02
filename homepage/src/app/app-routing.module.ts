import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { EditTodoPageComponent } from './edit-todo-page/edit-todo-page.component';
import { NewTodoPageComponent } from './new-todo-page/new-todo-page.component';
import { SwitchComponent } from './switch/switch.component';

const routes: Routes = [
	{ path: '', redirectTo: '/homepage', pathMatch: 'full'},
	{ path: 'homepage', component: MainComponent},
	{ path: 'todo', component: TodoPageComponent, pathMatch: 'full'},
	{ path: 'todo-edit/:id', component: EditTodoPageComponent},
	{ path: 'todo-new', component: NewTodoPageComponent},
	{ path: 'switch', component: SwitchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
