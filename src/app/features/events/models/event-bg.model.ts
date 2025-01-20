import moment from 'moment';
import { LocationItem } from './location-item.model';
import { EventSubscription } from './event-subscription.model';
import { ProfileItem } from '@/features/users/models/profile-item.model';

export class EventBg {
  id: number;
  title: string;
  isPrivate: boolean;
  // Datetime
  startDatetime: moment.Moment;
  endDatetime: moment.Moment;
  // Location
  location: LocationItem;
  // Players
  host: ProfileItem;
  subscription: EventSubscription; // the current User Subscription
  // subscriptions: EventSubscription[]; // all the current Subscriptions for the Host to administrate
  players: ProfileItem[]; // all the Users with subscription.isAccepted = true
  minPlayers: number;
  maxPlayers: number;
  // Details
  description: string;
  level: number;
  atmosphere: number;
  // Timestamps
  deleted_at: string;

  constructor() {
    this.id = -1;
    this.title = '';
    this.isPrivate = false;
    // Datetime
    this.startDatetime = moment().add(1, 'h').minutes(0);
    this.endDatetime = moment().add(5, 'h').minutes(0);
    // Location
    this.location = new LocationItem();
    // Players
    this.host = new ProfileItem();
    this.subscription = new EventSubscription(-1, -1);
    this.players = [];
    this.minPlayers = 1;
    this.maxPlayers = 4;
    // Details
    this.description = '';
    this.level = 0;
    this.atmosphere = 2;
    // Timestamps
    this.deleted_at = '';
  }
}
