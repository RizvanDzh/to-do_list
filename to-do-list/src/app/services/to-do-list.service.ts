import { Injectable } from '@angular/core';
import { ITodoItem } from 'src/app/item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToDoListService {
  constructor(private http: HttpClient) {}

  public getItems(): Observable<ITodoItem[]> {
    return this.http.get<ITodoItem[]>('../../assets/todo-list.json');
  }

  public addNewItem(item: ITodoItem, array: ITodoItem[]) {
    return [...array, item];
  }

  public deleteItem(item: ITodoItem, array: ITodoItem[]) {
    return array.filter((i) => i.id != item.id);
  }

  public changeStatus(item: ITodoItem, newStatus: string, array: ITodoItem[]) {
    return array.map((i) => {
      if (item.id === i.id) {
        i.status = newStatus;
      }
      return i;
    });
  }

  public filterSearchItem(
    filterValue: string,
    searchValue: string,
    array: ITodoItem[]
  ) {
    if (filterValue === 'default') {
      return array.filter((i) =>
        i.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    } else {
      return array
        .filter((i) =>
          i.title.toLowerCase().includes(searchValue.toLowerCase())
        )
        .filter((i) => i.status === filterValue);
    }
  }
}
