import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ITodoItem, TodoItem } from 'src/app/item';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoitemComponent implements OnInit {
  public selectedValueClass!: string;
  public selectControl: FormControl = new FormControl();

  constructor() {}

  @Input() item!: ITodoItem;

  @Output() changeStatusEvent = new EventEmitter<string>();

  @Output() deleteItemEvent = new EventEmitter<TodoItem>();

  ngOnInit(): void {
    this.selectedValueClass = this.setStatusClass(this.item.status);
    this.selectControl.setValue(this.item.status);
    this.initSelectControl();
  }

  public initSelectControl() {
    this.selectControl.valueChanges.subscribe((value: string) => {
      this.changeStatusEvent.emit(value);
      this.selectedValueClass = this.setStatusClass(value);
    });
  }

  public setStatusClass(value: string) {
    if (value == 'important') {
      return 'todo-item--important';
    } else if (value == 'completed') {
      return 'todo-item--completed';
    } else {
      return 'todo-item--ordinary';
    }
  }

  public deleteItem(): void {
    this.deleteItemEvent.emit(this.item);
  }
}
