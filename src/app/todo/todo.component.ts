import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { ToDoItem } from '../todoitem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  displayAll: boolean = true;
  constructor() {}
  message = 'no message';
  style = 'color:green';
  model = new Model();
  desc = null;
  act = null;
  getName() {
    return this.model.name;
  }
  ChangeColor(tbody: any, style: any, item: any) {
    this.desc = item.description;
    this.act = item.action;
    for (let i = 0; i < tbody.children.length; i++) {
      let element = tbody.children[i];
      element.style.backgroundColor = 'white';
    }
    style.backgroundColor = 'springgreen';
  }
  addItem(value: string) {
    // this.message=value;
    // console.log(value);
    if (value != '') {
      this.model.items.push(new ToDoItem(1, value, false));
      this.message = '';
      value = '';
    } else {
      alert('Please input info');
    }
  }

  changeAction(data: any) {
    if (data.innerHTML == 'Yes') {
      data.innerHTML = 'No';
    } else {
      data.innerHTML = 'Yes';
    }
  }
  updateInfo(i1: any, i2: any) {
    for (let i = 0; i < this.getItems().length; i++) {
      if (this.getItems()[i].description == this.desc) {
        this.getItems()[i].description = i1.value;
        if (i2.value == 'true') {
          this.getItems()[i].action = true;
        } else {
          this.getItems()[i].action = false;
        }
        console.log('salam');
      }
    }
  }

  getItems() {
    if (this.displayAll) {
      return this.model.items;
    }
    return this.model.items.filter((item) => item.action == false);
  }
}
