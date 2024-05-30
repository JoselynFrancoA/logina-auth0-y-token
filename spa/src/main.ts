import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

import { bootstrapApplication } from '@angular/platform-browser';
import { provideAuth0 } from '@auth0/auth0-angular';
import { AppComponent } from './app/app.component';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

bootstrapApplication(AppComponent , {
  providers: [
    provideAuth0({
      domain: 'dev-gin5bkucdwzu3jbf.us.auth0.com',
      clientId: '3DMy4BQ5vbAqVCYBefZW95zv9HdTpemA',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ]
}
);