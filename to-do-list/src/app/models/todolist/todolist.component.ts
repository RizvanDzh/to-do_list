import { Component, OnInit } from '@angular/core';
import { ToDoListService } from 'src/app/services/to-do-list.service';
import { ITodoItem } from 'src/app/item';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  public todos!: ITodoItem[];

  constructor(public itemService: ToDoListService) {}

  ngOnInit(): void {
    this.todos = this.itemService.todoList;
  }

  public processEvent(event: ITodoItem): void {
    this.itemService.addNewItem(event);
  }

  public changeStatusEvent(todo: ITodoItem, event: string): void {
    this.itemService.changeStatus(todo, event);
  }

  public filterItemEvent(event: string): void {
    this.itemService.setFilterValue(event);
  }

  public searchItemEvent(event: string): void {
    this.itemService.setSearchValue(event);
  }

  public deleteItemEvent(event: ITodoItem): void {
    this.itemService.deleteItem(event);
  }
}
