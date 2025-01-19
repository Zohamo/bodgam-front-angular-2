import { Component, Input } from '@angular/core';
import { version } from '@package';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-footer',
  imports: [MatToolbarModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  public author = { name: 'Mathias Mille', url: 'https://mathiasmille.fr/' };
  public version = version;
  public startYear = 2018;
  public currentYear = 2025; // moment().year()
  @Input() title: string = '';
}
