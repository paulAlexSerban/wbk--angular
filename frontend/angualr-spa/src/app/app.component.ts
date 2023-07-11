import { Component } from '@angular/core';

/**
 * This is the root component of the application.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title: string = 'angualr-spa';
  subheading: string = 'This is a subheading';
}
