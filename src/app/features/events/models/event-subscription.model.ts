import { Profile } from '@/features/users/models/profile.model';

export class EventSubscription {
  public isAccepted: boolean;
  public hasConfirmed: boolean;
  public eventId: number;
  public userId: number;
  public profile?: Profile;

  constructor(eventId: number, userId: number, hasConfirmed: boolean = false) {
    this.isAccepted = false;
    this.hasConfirmed = hasConfirmed;
    this.eventId = eventId;
    this.userId = userId;
  }
}
