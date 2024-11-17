import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),        // Proporcionar las rutas
    provideHttpClient(),          // Proporcionar HttpClient usando la nueva API
    ...appConfig.providers,       // Incluir cualquier otra configuración que haya en appConfig
  ],
}).catch((err) => console.error(err));
