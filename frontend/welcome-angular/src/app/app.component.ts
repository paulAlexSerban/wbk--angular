import { Component } from '@angular/core';
import { random } from 'lodash';

@Component({
  // defines a CSS selector with the ID app-root that represents the component in a template
  // the common practice is to define a component's selector as an element selector (e.g. <app-root></app-root>) or an attribute selector (e.g. <div app-root></div>)
  // NOTA BENE: - this selector is used in the index.html file
  //            - the selector prefix needs to be unique
  selector: '#app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'welcome-angular';
  rootName = 'newPaul Name root';
  rootItems = ['Apples', 'Bananas', 'Cherries'];
  number = 0;

  onNameChanged(newName: string) {
    this.rootName = newName;
  }

  onItemWasAdded(newItem: string) {
    this.rootItems.push(newItem);
    console.log(this.rootItems);
  }

  onIncrease() {
    this.number = random(0, 10);
  }
}
