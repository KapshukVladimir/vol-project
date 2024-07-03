import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { completeIconsSet } from './core/shared/icons/coa-icons';
import { VolIconsRegistryService } from './core/shared/icons/coa-icons-registry.service';

@Component({
  selector: 'vol-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'vol';
  public registeredIcons = completeIconsSet;

  constructor(private volIconsRegistryService: VolIconsRegistryService) {}

  ngOnInit(): void {
    this.volIconsRegistryService.registerIcons([...this.registeredIcons]);
  }
}
