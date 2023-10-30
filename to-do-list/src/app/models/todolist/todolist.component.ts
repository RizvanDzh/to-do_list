import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ToDoListService } from 'src/app/services/to-do-list.service';
import { ITodoItem } from 'src/app/item';
import { take } from 'rxjs';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodolistComponent implements OnInit {
  public todos!: ITodoItem[];
  public filteredTodos!: ITodoItem[];
  public searchValue: string = '';
  public filterValue: string = 'default';

  constructor(
    public itemService: ToDoListService,
    public cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.itemService.getItems().subscribe((data: ITodoItem[]) => {
      console.log('todolist.component:', data);
      this.todos = data;
      this.filteredTodos = [...this.todos];
      this.cdr.detectChanges();
    });
  }

  public processEvent(item: ITodoItem): void {
    this.todos = this.itemService.addNewItem(item, this.todos);
    this.filteredTodos = [...this.todos];
    this.cdr.detectChanges();
  }

  public changeStatusEvent(item: ITodoItem, status: string): void {
    this.todos = this.itemService.changeStatus(item, status, this.todos);
    this.filteredTodos = [...this.todos];
    this.cdr.detectChanges();
  }

  public deleteItemEvent(item: ITodoItem): void {
    this.todos = this.itemService.deleteItem(item, this.todos);
    this.filteredTodos = [...this.todos];
    this.cdr.detectChanges();
  }

  public filterItemEvent(filterValue: string): void {
    this.filterValue = filterValue;
    this.filteredTodos = this.itemService.filterSearchItem(
      filterValue,
      this.searchValue,
      this.todos
    );
    this.cdr.detectChanges();
  }

  public searchItemEvent(searchValue: string): void {
    this.searchValue = searchValue;
    this.filteredTodos = this.itemService.filterSearchItem(
      this.filterValue,
      searchValue,
      this.todos
    );
    this.cdr.detectChanges();
  }
}
