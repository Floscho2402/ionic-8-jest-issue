import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'demo',
    loadChildren: () => import('./pages/maintenance/demo.routes')
  },
  {
    path: '',
    redirectTo: 'demo',
    pathMatch: 'full'
  }
];
