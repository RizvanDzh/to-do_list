import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistModule } from './models/todolist/todolist.module';
import { TodosearchComponent } from './models/todosearch/todosearch.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TodolistModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
