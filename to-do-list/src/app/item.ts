export interface ITodoItem {
  id: number;
  title: string;
  status: string;
  isCompleted: boolean;
}

export class TodoItem {
  public id: number;
  public title: string;
  public status: string;
  public isCompleted: boolean;

  constructor(item: ITodoItem) {
    this.id = item.id;
    this.title = item.title;
    this.status = item.status;
    this.isCompleted = item.isCompleted;
  }
}
