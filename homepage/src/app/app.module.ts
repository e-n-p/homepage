import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ColorPickerModule } from 'ngx-color-picker';

import { MainComponent } from './main/main.component';
import { LampiComponent } from './lampi/lampi.component';
import { NoticeFeedComponent } from './notice-feed/notice-feed.component';
import { NotesComponent } from './notes/notes.component';

import { TodosModule } from './todos/todos.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LampiComponent,
    NoticeFeedComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ColorPickerModule,
    TodosModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
