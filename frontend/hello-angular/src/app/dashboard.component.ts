import { Component } from "@angular/core";

@Component({
  selector: "app-dashoard",
  templateUrl: "./dashboard.component.html"
})

export class DashboardComponent {
  loadState: string = "...loading";

  onSwitchState() {
    this.loadState = "finished";
  }
}