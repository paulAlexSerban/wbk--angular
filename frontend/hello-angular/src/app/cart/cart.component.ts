import { Component, Input, EventEmitter, Output } from '@angular/core';
import {random} from 'lodash';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  @Input() items: string[] = [];
  @Output() itemAdded = new EventEmitter<string>();
  newItem = '';
  randomNum = random(0, 100);
  
  onAddItem() {
    this.itemAdded.emit(this.newItem);
  }
}
