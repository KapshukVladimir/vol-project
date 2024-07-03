import { Component } from '@angular/core';
import { VolIconComponent } from '../../shared/icons/coa-icon.component';

@Component({
  selector: 'vol-header',
  standalone: true,
  imports: [VolIconComponent, VolIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
