import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// // added this small component section but not sure if I was supposed to
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class AppComponent {
  title = 'todo';

  filter: 'all' | 'active' | 'done' = 'all';

  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false
    });
  } 

  allItems = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }

  // Giving me issues!!
  remove(item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }

}
