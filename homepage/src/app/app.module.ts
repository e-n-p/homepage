import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ColorPickerModule } from 'ngx-color-picker';

import { MainComponent } from './main/main.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { EditTodoPageComponent } from './edit-todo-page/edit-todo-page.component';
import { NewTodoPageComponent } from './new-todo-page/new-todo-page.component';
import { TodoDataFormComponent } from './todo-data-form/todo-data-form.component';
import { LampiComponent } from './lampi/lampi.component';
import { SortPipe } from './sort-pipe.component';
import { NoticeFeedComponent } from './notice-feed/notice-feed.component';
import { NotesComponent } from './notes/notes.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TodoPageComponent,
    EditTodoPageComponent,
    NewTodoPageComponent,
    TodoDataFormComponent,
    LampiComponent,
    SortPipe,
    NoticeFeedComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ColorPickerModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
