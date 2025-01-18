import { Routes } from '@angular/router';
import { EventListComponent } from './features/events/components/event-list/event-list.component';
import { EventFormComponent } from './features/events/components/event-form/event-form.component';

export const routes: Routes = [
  { path: 'events', component: EventListComponent },
  { path: 'events/form', component: EventFormComponent },
];
