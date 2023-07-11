import { Component } from '@angular/core';

/**
 * Decorator that marks a class as an Angular component and provides configuration metadata that determines how the component should be processed, instantiated, and used at runtime.
 * @param selector — the CSS selector that identifies this directive in a template and triggers instantiation of the directive.
 * @param templateUrl — the relative path or absolute URL of a template file for an Angular component.
 * @param styleUrls — the relative path or absolute URL of a style file(s) for an Angular component.
 */
@Component({
  selector: 'hello-angular-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title: string = 'angualr-spa';
  subheading: string = 'This is a subheading';
  rootName: string = 'John Doe';

  onNameChanged(newName: string) {
    this.rootName = newName;
  }

  rootItems: Array<string> = ['Apples', 'Bananas', 'Cherries'];

  onItemWasAdded(newItem: string) {
    this.rootItems.push(newItem);
    console.log(this.rootItems)
  }
}
