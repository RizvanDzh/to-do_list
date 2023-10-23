import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistComponent } from './todolist.component';
import { TodoitemComponent } from '../todoitem/todoitem.component';
import { ToDoListService } from 'src/app/services/to-do-list.service';
import { TodoformComponent } from '../todoform/todoform.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodolistComponent, TodoitemComponent, TodoformComponent],
  imports: [CommonModule, FormsModule],
  providers: [ToDoListService],
  exports: [TodolistComponent, TodoitemComponent],
})
export class TodolistModule { }
