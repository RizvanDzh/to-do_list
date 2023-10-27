import { Injectable } from '@angular/core';
import { ITodoItem, ORDINARY, IMPORTANT, COMPLETED } from 'src/app/item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ToDoListService {
  constructor(private http: HttpClient) {}

  todoList: ITodoItem[] = [
    {
      id: 0,
      title: 'Сходить в магазин',
      status: ORDINARY,
    },
    {
      id: 1,
      title: 'Почистить зубы',
      status: IMPORTANT,
    },
    {
      id: 2,
      title: 'Проснуться в 7:00',
      status: COMPLETED,
    },
    {
      id: 3,
      title: 'Приготовить ужин',
      status: IMPORTANT,
    },
    {
      id: 4,
      title: 'Посмотреть фильм',
      status: ORDINARY,
    },
  ];

  public searchValue: string = '';
  public filterValue: string = 'default';

  public deleteItem(item: ITodoItem): void {
    this.todoList = this.todoList.filter((i) => i.id != item.id);
  }

  public addNewItem(item: ITodoItem): void {
    this.todoList.push({
      id: this.todoList.length + 1,
      title: item.title,
      status: item.status,
    });
  }

  public changeStatus(item: ITodoItem, newStatus: string): void {
    item.status = newStatus;
  }

  public setSearchValue(value: string) {
    this.searchValue = value;
  }

  public setFilterValue(value: string) {
    this.filterValue = value;
  }

  public searchItems(): ITodoItem[] {
    return this.todoList.filter(
      (i) =>
        i.title.toLowerCase().includes(this.searchValue.toLowerCase()) &&
        (i.status === this.filterValue || this.filterValue === 'default')
    );
  }
}
