import { Routes } from '@angular/router';
import { AuthComponent } from './core/pages/auth/auth.component';
import { MainLayoutComponent } from './core/pages/main/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./core/pages/auth/auth.component').then(
        (mod) => mod.AuthComponent,
      ),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./core/pages/auth/login/login.component').then(
            (mod) => mod.LoginComponent,
          ),
      },
      {
        path: 'registration',
        loadComponent: () =>
          import('./core/pages/auth/registration/registration.component').then(
            (mod) => mod.RegistrationComponent,
          ),
      },
    ],
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./core/pages/main/home-page/home-page.component').then(
            (mod) => mod.HomePageComponent,
          ),
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./core/pages/main/dashboard/dashboard.component').then(
            (mod) => mod.DashboardComponent,
          ),
      },
      {
        path: 'reminder',
        loadComponent: () =>
          import('./core/pages/main/reminder/reminder.component').then(
            (mod) => mod.ReminderComponent,
          ),
      },
      {
        path: 'time-tracker',
        loadComponent: () =>
          import('./core/pages/main/time-tracker/time-tracker.component').then(
            (mod) => mod.TimeTrackerComponent,
          ),
      },
      {
        path: 'invoices',
        loadComponent: () =>
          import('./core/pages/main/invoices/invoices.component').then(
            (mod) => mod.InvoicesComponent,
          ),
      },
      {
        path: 'exit',
        loadComponent: () =>
          import('./core/pages/main/exit/exit.component').then(
            (mod) => mod.ExitComponent,
          ),
      },

      {
        path: 'settings',
        loadComponent: () =>
          import('./core/pages/main/settings/settings.component').then(
            (mod) => mod.SettingsComponent,
          ),
      },
    ],
  },
];
