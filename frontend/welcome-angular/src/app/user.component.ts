import { Component, Input } from '@angular/core';

@Component({
  selector: '#app-user',
  // [value]="name" is a property binding - you bind the value of the name property to the value property of the input element
  //    - this should be used when you want to set an element property to a non-string data value or when there is no element property to bind (e.g. <div [ngClass]="{bordered: false}">)
  // (input)="onUserUserInput($event)" is an event binding - you bind the input event of the input element to the onUserUserInput() method
  // value="{{ name }}" is an interpolation - you interpolate the value of the name property into the value property of the input element
  // [(ngModel)]="name" is a two-way binding - you bind the name property to the input element and the input element to the name property
  template: `
    <input type="text" [(ngModel)]="name" />
    <h1>Hello {{ name }}</h1>
    <p>I am new to Angular!</p>
  `,
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  // @Input() is a decorator that marks the name property as a property that can be set from outside the component
  @Input() name = 'Paul';

  onUserUserInput(event: any) {
    this.name = event.target.value;
  }
}
