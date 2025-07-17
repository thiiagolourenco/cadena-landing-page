import { Routes } from '@angular/router';

import { LandingPage } from './features/landing/landing.page';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingPage,
  },
];
