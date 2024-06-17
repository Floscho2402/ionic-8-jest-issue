import { enableProdMode, importProvidersFrom, LOCALE_ID } from '@angular/core';
import { environment } from '@env/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  PreloadAllModules,
  provideRouter,
  RouteReuseStrategy,
  withPreloading,
  withRouterConfig
} from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import { routes } from '@app/app.routes';
import { AppComponent } from '@app/app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { registerLocaleData } from '@angular/common';

if (environment.production) {
  enableProdMode();
}

registerLocaleData(localeDe, 'de-DE', localeDeExtra);

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'de'
      })
    ),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(
      routes,
      withPreloading(PreloadAllModules),
      withRouterConfig({
        onSameUrlNavigation: 'reload'
      })
    ),
    { provide: LOCALE_ID, useValue: 'de-DE' }
  ]
}).catch(err => console.error(err));
