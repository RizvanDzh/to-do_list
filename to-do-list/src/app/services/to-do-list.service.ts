import { Injectable } from '@angular/core';
import { ITodoItem, ORDINARY, IMPORTANT, COMPLETED } from 'src/app/item';

@Injectable({
  providedIn: 'root',
})
export class ToDoListService {
  constructor() {}

  todoList: ITodoItem[] = [
    {
      id: 1,
      title: 'Сходить в магазин',
      status: ORDINARY,
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Почистить зубы',
      status: IMPORTANT,
      isCompleted: false,
    },
    {
      id: 3,
      title: 'Проснуться в 7:00',
      status: COMPLETED,
      isCompleted: true,
    },
    {
      id: 4,
      title: 'Приготовить ужин',
      status: IMPORTANT,
      isCompleted: false,
    },
    {
      id: 5,
      title: 'Посмотреть фильм',
      status: ORDINARY,
      isCompleted: false,
    },
  ];

  deleteItem(id: number) {
    this.todoList = this.todoList.filter((item) => item.id != id);
  }

  addNewItem(title: string, status: string) {
    this.todoList.push({
      id: this.todoList.length + 1,
      title,
      status,
      isCompleted: false,
    });
  }

  changeStatus(id: number, status: string) {
    this.todoList.forEach((item) => {
      if (item.id == id) {
        item.status = status;
      }
    });
  }
}
