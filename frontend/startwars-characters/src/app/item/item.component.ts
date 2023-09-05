import { Component, Input } from '@angular/core';
import { StarWarsService } from '../starwars.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() character: { name: string; side: string } = { name: '', side: '' };
  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  onAssign(side: any) {
    this.swService.onSideChosen({ name: this.character.name, side: side });
  }
}
