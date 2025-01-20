import { Routes } from '@angular/router';
import { EventListPageComponent } from './features/events/pages/event-list-page/event-list-page.component';
import { EventFormPageComponent } from './features/events/pages/event-form-page/event-form-page.component';

export const routes: Routes = [
  { path: 'events', component: EventListPageComponent },
  { path: 'events/form', component: EventFormPageComponent },
];
