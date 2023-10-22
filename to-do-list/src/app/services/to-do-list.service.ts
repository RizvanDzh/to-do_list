import { Injectable } from '@angular/core';
import { ITodoItem, ORDINARY, IMPORTANT, COMPLETED } from 'src/app/item';

@Injectable({
  providedIn: 'root',
})
export class ToDoListService {
  constructor() { }

  todoList: ITodoItem[] = [
    {
      id: 0,
      title: 'Сходить в магазин',
      status: ORDINARY
    },
    {
      id: 1,
      title: 'Почистить зубы',
      status: IMPORTANT
    },
    {
      id: 2,
      title: 'Проснуться в 7:00',
      status: COMPLETED
    },
    {
      id: 3,
      title: 'Приготовить ужин',
      status: IMPORTANT
    },
    {
      id: 4,
      title: 'Посмотреть фильм',
      status: ORDINARY
    }
  ];

  public deleteItem(item: ITodoItem) {
    this.todoList = this.todoList.filter((i) => i.id != item.id);
  }

  public addNewItem(item: ITodoItem) {
    this.todoList.push({
      id: this.todoList.length + 1,
      title: item.title,
      status: item.status
    });
  }

  public changeStatus(item: ITodoItem, newStatus: string) {
    item.status = newStatus;
  }
}
