import { Routes } from '@angular/router';
import { ShowDailyScheduleComponent } from './shows/show-daily-schedule/show-daily-schedule.component';
import { ShowsComponent } from './shows/shows.component';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '', component: ShowDailyScheduleComponent }, // TODO: Replace component with homepage.
  { path: 'shows', component: ShowsComponent },
  { path: 'daily', component: ShowDailyScheduleComponent },
];
