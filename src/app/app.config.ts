import { provideRouter } from '@angular/router';
import {
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
  ApplicationConfig,
} from '@angular/core';

import { providePrimeNG } from 'primeng/config';

import { routes } from './app.routes';
import { StyleTheme } from '../theme';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: StyleTheme,
      },
    }),
  ],
};
