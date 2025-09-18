import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection
} from '@angular/core';
import {provideRouter} from '@angular/router';
import Aura from '@primeuix/themes/aura';

import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {providePrimeNG} from 'primeng/config';
import {provideHttpClient} from '@angular/common/http';
import {Configuration} from './configuration/configuration';

const DEFAULT_CONFIG = 'app-configuration-1.json';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    provideAppInitializer(() => inject(Configuration).loadConfig(DEFAULT_CONFIG),
    ),
    provideAnimationsAsync(), // needed for primeNG
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.dark'
        }
      }
    }),
  ]
};
