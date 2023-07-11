import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
/**
 * This is the root component of the Angular application.
 * Every Angular application has at least one component, the root component that connects a component hierarchy with the page document object model (DOM).
 * Each component defines a class that contains application data and logic, and is associated with an HTML template that defines a view to be displayed in a target environment.
 * @param declarations — the components, directives, and pipes that belong to this NgModule.
 * @param imports — other modules whose exported classes are needed by component templates declared in this NgModule.
 * @param providers — creators of services that this NgModule contributes to the global collection of services; they become accessible in all parts of the app.
 * @param bootstrap — the main application view, called the root component, that hosts all other app views. Only the root NgModule should set the bootstrap property.
 * @see https://angular.io/guide/architecture-components
 */
export class AppModule { }
