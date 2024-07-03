import { Component, OnInit } from '@angular/core';
import { SIDEBAR_INFO } from './consts/sidebar-consts';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';
import { VolIconComponent } from '../../shared/icons/coa-icon.component';

@Component({
  selector: 'vol-sidebar',
  standalone: true,
  imports: [
    VolIconComponent,
    RouterLink,
    RouterLinkActive,
    NgClass,
    VolIconComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  public sidebarInfo: any[] = SIDEBAR_INFO;
  public ngOnInit(): void {}
}
