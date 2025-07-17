import { Component } from '@angular/core';

import { MenuBarComponent } from './components/menu-bar/menu-bar.component';

@Component({
  selector: 'app-landing-page',
  imports: [MenuBarComponent],
  templateUrl: './landing.page.html',
  styleUrl: './landing.page.scss',
})
export class LandingPage {}
