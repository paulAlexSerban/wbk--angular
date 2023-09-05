import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard.component';

/**
 * This component will hold our entire application
 */

@NgModule({
  declarations: [AppComponent, UserComponent, DashboardComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent, UserComponent, DashboardComponent],
})
export class AppModule {}
