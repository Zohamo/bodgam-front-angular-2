import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { Observable, BehaviorSubject, concat } from 'rxjs';
import { map } from 'rxjs/operators';
import { EventBg } from '../models/event-bg.model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private currentEventSubject: BehaviorSubject<EventBg>;
  public currentEvent: Observable<EventBg>;

  /**
   * Creates an instance of EventService.
   *
   * @param {HttpClient} http
   * @memberof EventService
   */
  constructor(private http: HttpClient) {
    this.currentEventSubject = new BehaviorSubject<EventBg>(new EventBg());
    this.currentEvent = this.currentEventSubject.asObservable();
  }

  /**
   * Get current Event observable.
   *
   * @readonly
   * @type {Observable<EventBg>}
   * @memberof EventService
   */
  public get currentEvent$(): Observable<EventBg> {
    return this.currentEvent;
  }

  /**
   * Get current Event value.
   *
   * @readonly
   * @type {EventBg}
   * @memberof EventService
   */
  public get value(): EventBg {
    return this.currentEventSubject.value;
  }

  /**
   * Updates the Event observable value from the API result.
   *
   * @private
   * @param {EventBg} value
   * @returns {EventBg}
   * @memberof EventService
   */
  private updateValue(value: EventBg): EventBg {
    this.currentEventSubject.next(this.eventFormatter(value));
    return value;
  }

  /**
   * Formats the Event model received.
   *
   * @private
   * @param {EventBg} event
   * @returns {EventBg}
   * @memberof EventService
   */
  private eventFormatter(event: EventBg): EventBg {
    if (!event.players) {
      event.players = [];
    }
    return event;
  }

  /**
   * Calls the API to get all events.
   *
   * @param {number} [profileId]
   * @returns {Observable<EventBg[]>}
   * @memberof EventService
   */
  public getEvents(profileId?: number): Observable<EventBg[]> {
    return (
      profileId
        ? this.http.get<EventBg[]>(
            `${environment.apiPath}/profiles/${profileId}/events`
          )
        : this.http.get<EventBg[]>(`${environment.apiPath}/events`)
    ).pipe(map((events) => events.map((event) => this.eventFormatter(event))));
  }

  /**
   * Calls the API to get the events the user has subscribed to.
   *
   * @param {number} profileId
   * @returns {Observable<EventBg[]>}
   * @memberof EventService
   */
  public getEventsSubscribed(profileId: number): Observable<EventBg[]> {
    return this.http
      .get<EventBg[]>(
        `${environment.apiPath}/profiles/${profileId}/subscriptions`
      )
      .pipe(map((events) => events.map((event) => this.eventFormatter(event))));
  }

  /**
   * Calls the API to get one Event and subscribes to Pusher to receive the event's notifications.
   *
   * @param {number} id
   * @returns {Observable<EventBg>}
   * @memberof EventService
   */
  public getEvent(id: number): Observable<EventBg> {
    return this.http
      .get<EventBg>(`${environment.apiPath}/events/${id}`)
      .pipe(map((eventRes) => this.updateValue(eventRes)));
    /* return concat(
      this.http.get<EventBg>(`${environment.apiPath}/events/${id}`).pipe(map((eventRes) => this.updateValue(eventRes))),
      this.pusherService.subscribeToChannelObs('event-notifications', [`event-${id}`])
    ); */
  }

  /**
   * Calls the API to save an Event.
   *
   * @param {EventBg} event
   * @returns {Observable<EventBg>}
   * @memberof EventService
   */
  public saveEvent(event: EventBg): Observable<EventBg> {
    return (
      event.id
        ? this.http.put<EventBg>(
            `${environment.apiPath}/events/${event.id}`,
            event
          )
        : this.http.post<EventBg>(`${environment.apiPath}/events`, event)
    ).pipe(map((eventRes) => this.updateValue(eventRes)));
  }

  /**
   * Calls the API to delete an Event.
   *
   * @param {number} id
   * @returns {Observable<EventBg>}
   * @memberof EventService
   */
  public deleteEvent(id: number): Observable<EventBg> {
    return this.http.delete<EventBg>(`${environment.apiPath}/events/${id}`);
  }
}
