import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: '#app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  @Input() items: string[] = [];
  @Output() itemAdded = new EventEmitter<string>();
  newItem = '';

  onAddItem() {
    this.itemAdded.emit(this.newItem);
    this.newItem = '';
  }
}
