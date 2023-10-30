import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { TodoItem, ITodoItem } from 'src/app/item';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoformComponent implements OnInit {
  title!: string;
  status: string = 'ordinary';

  constructor() {}

  @Input() items!: ITodoItem[];

  @Output() newEvent = new EventEmitter<TodoItem>();

  ngOnInit(): void {}

  public addNewItem(): void {
    const newItem = new TodoItem(this.items.length, this.title, this.status);
    this.title = '';
    this.status = 'ordinary';
    this.newEvent.emit(newItem);
  }
}
