import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})

export class TabsComponent {
  characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' },
    { name: 'Obi-Wan Kenobi', side: '' },
    { name: 'Han Solo', side: '' },
    { name: 'Leia Organa', side: ''},
    { name: 'Yoda', side: '' },
    { name: 'R2-D2', side: '' },
    { name: 'C-3PO', side: '' },
  ];

  chosenList = 'all';

  onChoose(side: string) {
    this.chosenList = side;
  }

  getCharacters() {
    if (this.chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === this.chosenList;
    })
  }

  onSideChosen(charInfo: { name: string; side: string; }) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    })
    this.characters[pos].side = charInfo.side;
  }
}
