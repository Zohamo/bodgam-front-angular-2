import { Component, Input } from '@angular/core';
import { EventBg } from '../../models/event-bg.model';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-event-list',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss',
})
export class EventListComponent {
  @Input() events: EventBg[] = [];
}
