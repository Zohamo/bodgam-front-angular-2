export class ProfileItem {
  id: number;
  name: string;
  avatar: string;
  district: string;
  city: string;
  country: string;

  constructor() {
    this.id = -1;
    this.name = '';
    this.avatar = '';
    this.district = '';
    this.city = '';
    this.country = 'FR';
  }
}
