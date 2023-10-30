import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ITodoItem } from 'src/app/item';

@Component({
  selector: 'app-todosearch',
  templateUrl: './todosearch.component.html',
  styleUrls: ['./todosearch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosearchComponent implements OnInit {
  public searchValue: string = '';
  public filterValue: string = 'default';

  @Output() searchEvent = new EventEmitter<string>();

  @Output() filterEvent = new EventEmitter<string>();

  public setFilterValue(): void {
    this.filterEvent.emit(this.filterValue);
  }

  public setSearchValue(): void {
    this.searchEvent.emit(this.searchValue);
  }

  ngOnInit(): void {}
}
