import { ProfileItem } from './profile-item.model';
import { ProfilePrivacy } from './profile-privacy.model';
import { ProfileRatings } from './profile-ratings.model';

/* TODO use this enum for gender
export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER'
} */

export class Profile extends ProfileItem {
  userId: number;
  email: string;
  gender: string;
  birthdate: string;
  description: string;
  bggName: string;
  phoneNumber: string;
  website: string;
  privacy: ProfilePrivacy;
  ratings: ProfileRatings;

  constructor() {
    super();
    this.userId = -1;
    this.email = '';
    this.gender = '';
    this.birthdate = '';
    this.description = '';
    this.bggName = '';
    this.phoneNumber = '';
    this.website = '';
    this.privacy = new ProfilePrivacy();
    this.ratings = new ProfileRatings();
  }
}
