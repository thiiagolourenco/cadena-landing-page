import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-landing-page',
  imports: [ToolbarModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './landing.page.html',
  styleUrl: './landing.page.scss',
})
export class LandingPage {}
