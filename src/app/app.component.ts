import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
  `
  <app-home></app-home>
  <app-projects></app-projects>
  <app-links></app-links>

  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'personal-website';
}
