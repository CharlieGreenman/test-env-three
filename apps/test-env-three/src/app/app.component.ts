import { Component } from '@angular/core';

@Component({
  selector: 'test-env-three-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'test-env-three';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
