import { Route } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const appRoutes: Route[] = [
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component'),
  },
  {
    path: 'settings',
    loadComponent: () => import('./pages/settings/settings.component'),
  },
  {
    path: 'contacts',
    loadComponent: () => import('./pages/contacts/contacts.component'),
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'ads',
        loadComponent: () => import('./pages/ads/ads.component'),
      },
    ],
  },
  {
    path: 'error',
    loadComponent: () => import('./pages/error/error.component'),
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error',
    pathMatch: 'full',
  },
];
