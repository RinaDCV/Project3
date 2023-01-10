import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/warehouse1/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

