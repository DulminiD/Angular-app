import {Component, OnInit} from '@angular/core';
import {Item} from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-ng8-app';
  public item = new Item(null, '');
  public edititem = new Item(null, '');
  edit = false;
  items: Item[] = [];
  private item1: Item;
  private item2: Item;
  ngOnInit(): void {
    this.item1 = new Item(1, 'Description 1');
    this.item2 = new Item(2, 'Description 2');
    this.items.push(this.item1);
    this.items.push(this.item2);
  }
  onSubmit() {
    // @ts-ignore
    this.items.push(this.item);
    this.item = new Item(null, '');
  }

  onEdit(id: number) {
    this.edit = !this.edit;
    this.edititem.id = id;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.items.length ; i++) {
      // @ts-ignore
      if ( this.items[i].id === id) {
        this.edititem.description = this.items[i].description;
      }
    }
  }

  onSubmitEdit() {
    console.log(this.edititem);
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.items.length ; i++) {
      // @ts-ignore
      if ( this.items[i].id === this.edititem.id) {
        this.items.splice(i, 1);
        this.items.push(this.edititem);
      }
    }
    this.edititem = new Item(null, '');
  }
  onDelete(id: number) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.items.length ; i++) {
      // @ts-ignore
      if ( this.items[i].id === id) {
        this.items.splice(i, 1);
      }
    }
    this.edititem = new Item(null, '');
  }
}
