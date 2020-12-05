import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainComponent } from './main/main.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { EditTodoPageComponent } from './edit-todo-page/edit-todo-page.component';
import { NewTodoPageComponent } from './new-todo-page/new-todo-page.component';
import { TodoDataFormComponent } from './todo-data-form/todo-data-form.component';
import { SwitchComponent } from './switch/switch.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TodoPageComponent,
    EditTodoPageComponent,
    NewTodoPageComponent,
    TodoDataFormComponent,
    SwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
