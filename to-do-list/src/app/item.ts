export const ORDINARY = 'ordinary';
export const IMPORTANT = 'important';
export const COMPLETED = 'completed';

export interface ITodoItem {
  id: number;
  title: string;
  status: string;
}

export class TodoItem {
  constructor(public id: number, public title: string, public status: string) { }
}
