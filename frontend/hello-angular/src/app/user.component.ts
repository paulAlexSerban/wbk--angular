import { Component } from '@angular/core';

@Component({
  selector: 'angular-spa-user',
  // inline template
  template: `
    <input
      type="text"
      name="name"
      id="name"
      (input)="onUserInput($event)"
      [(ngModel)]="name"
    />
    <h1>User {{ name }}</h1>
    <p>This is the user component</p>
  `,
  // inline styles
  styles: [
    `
      h1 {
        color: blue;
      }
    `,
  ],
})
export class UserComponent {
  name: string = 'John Doe';
  onUserInput(event: any) {
    this.name = event.target.value;
  }
}
