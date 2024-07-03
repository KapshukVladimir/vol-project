import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';

@Component({
  selector: 'vol-home-page',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
