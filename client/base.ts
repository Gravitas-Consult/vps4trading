import 'zone.js';
import 'reflect-metadata';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Meteor } from 'meteor/meteor';
import { AppModule } from './imports/app/main/main.module';

Meteor.startup(() => {
  platformBrowserDynamic().bootstrapModule(AppModule);
});