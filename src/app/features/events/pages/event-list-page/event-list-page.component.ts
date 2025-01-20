import { Component } from '@angular/core';
import { EventListComponent } from '../../components/event-list/event-list.component';
import { Observable } from 'rxjs';
import { EventBg } from '../../models/event-bg.model';
import { EventService } from '../../services/event.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-list-page',
  imports: [EventListComponent, CommonModule],
  templateUrl: './event-list-page.component.html',
  styleUrl: './event-list-page.component.scss',
})
export class EventListPageComponent {
  public events$: Observable<EventBg[]>;

  constructor(private eventService: EventService) {
    this.events$ = eventService.getEvents();
  }
}
