import { EventSubscription } from './event-subscription.model';

describe('EventSubscription', () => {
  it('should create an instance', () => {
    expect(new EventSubscription(-1, -1)).toBeTruthy();
  });
});
