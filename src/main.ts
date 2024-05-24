import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { RouterModule, provideRouter } from '@angular/router';
import { BasicExamplesComponent } from './app/shared/components/basic-examples/basic-examples.component';

const routes = [
  { path: '', component: AppComponent },
  { path: 'example', component: BasicExamplesComponent }
];

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
