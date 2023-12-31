import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistComponent } from './todolist.component';
import { TodoitemComponent } from '../todoitem/todoitem.component';
import { ToDoListService } from 'src/app/services/to-do-list.service';
import { TodoformComponent } from '../todoform/todoform.component';
import { TodosearchComponent } from '../todosearch/todosearch.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TodolistComponent,
    TodoitemComponent,
    TodoformComponent,
    TodosearchComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [ToDoListService],
  exports: [TodolistComponent, TodoitemComponent],
})
export class TodolistModule {}
