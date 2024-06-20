import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
//import { provideForms } from '@angular/forms';
//import { httpInterceptorProviders } from './interceptors';
import { routes } from './app.routes';
import { CoreModule } from './core/core.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    //{ provide: LOCALE_ID, useValue: 'fr-FR' },
    provideHttpClient(),
    provideAnimations(),
   // httpInterceptorProviders
    //provideForms()
  ]
};
