import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITodoItem } from 'src/app/item';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.scss'],
})
export class TodoitemComponent implements OnInit {
  public selectedValue!: string;

  constructor() {}

  @Input() item!: ITodoItem;

  @Output() changeStatusEvent = new EventEmitter<string>();

  ngOnInit(): void {
    this.selectedValue = this.item.status;
  }

  public setStatusClass() {
    this.changeStatusEvent.emit(this.selectedValue);

    if (this.selectedValue == 'important') {
      return 'todo-item--important';
    } else if (this.selectedValue == 'completed') {
      return 'todo-item--completed';
    } else {
      return 'todo-item--ordinary';
    }
  }
}
