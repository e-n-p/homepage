import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { TodoPageComponent } from './todo-page/todo-page.component';
import { EditTodoPageComponent } from './edit-todo-page/edit-todo-page.component';
import { NewTodoPageComponent } from './new-todo-page/new-todo-page.component';
import { TodoDataFormComponent } from './todo-data-form/todo-data-form.component';

import { SortPipe } from 'app/shared/pipes/sort-pipe.component';

const routes: Routes = [
    { path: 'todo', component: TodoPageComponent, pathMatch: 'full'},
    { path: 'todo-edit/:id', component: EditTodoPageComponent},
    { path: 'todo-new', component: NewTodoPageComponent},
];


@NgModule({
  declarations: [
    TodoPageComponent,
    EditTodoPageComponent,
    NewTodoPageComponent,
    TodoDataFormComponent,
    SortPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    TodoPageComponent,
    RouterModule
  ]
})
export class TodosModule { }
