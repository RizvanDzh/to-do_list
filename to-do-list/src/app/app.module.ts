import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListService } from './services/to-do-list.service';
import { TodolistModule } from './models/todolist/todolist.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TodolistModule],
  providers: [ToDoListService],
  bootstrap: [AppComponent],
})
export class AppModule { }
