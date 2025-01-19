import { Component } from '@angular/core';
import { EventListComponent } from '../../components/event-list/event-list.component';

@Component({
  selector: 'app-event-list-page',
  imports: [EventListComponent],
  templateUrl: './event-list-page.component.html',
  styleUrl: './event-list-page.component.scss',
})
export class EventListPageComponent {}
