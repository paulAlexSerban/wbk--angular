import { Component } from '@angular/core';

@Component({
  selector: '#app-user',
  template: `
  <input type="text" (input)="onUserUserInput($event)">
    <h1>Hello {{ name }}</h1>
    <p>I am new to Angular!</p>
  `,
  styleUrls: ['./user.component.scss'],
})

export class UserComponent {
  name = 'Paul';

  onUserUserInput(event: any) {
    this.name = event.target.value;
  }
}
