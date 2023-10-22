import { Component, OnInit } from '@angular/core';
import { ToDoListService } from 'src/app/services/to-do-list.service';
import { TodoItem, ITodoItem } from 'src/app/item';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  public todos!: ITodoItem[];

  constructor(public itemService: ToDoListService) { }

  ngOnInit(): void {
    this.todos = this.itemService.todoList;
  }
}
