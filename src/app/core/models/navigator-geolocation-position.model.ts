import { NavigatorGeolocationPositionCoords } from './navigator-geolocation-position-coords.model';

export class NavigatorGeolocationPosition {
  coords: NavigatorGeolocationPositionCoords =
    new NavigatorGeolocationPositionCoords();
  timestamp: number = 0;
}
