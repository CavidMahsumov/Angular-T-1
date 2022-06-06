import { ToDoItem } from './todoitem';

export class Model {
  name: string;
  items: ToDoItem[];

  constructor() {
    this.name = 'Elvin';
    this.items = [
      new ToDoItem(1, 'Breakfast', true),
      new ToDoItem(2, 'Sport', false),
      new ToDoItem(3, 'Read Book', false),
    ];
  }
}
