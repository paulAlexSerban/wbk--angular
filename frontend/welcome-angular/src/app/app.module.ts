import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user.component';

/**
 * This component will hold our entire application
 */

@NgModule({
  declarations: [AppComponent, UserComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent, UserComponent],
})
export class AppModule {}
