import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})

export class ItemComponent {
  @Input() character: { name: string; side: string } = { name: '', side: '' };
  @Output() sideAssigned = new EventEmitter<{ name: string; side: string }>();

  onAssign(side: any) {
    // this.character.side = side;
    this.sideAssigned.emit({ name: this.character.name, side: side });
  }
}
