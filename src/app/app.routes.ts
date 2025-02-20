import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'schedule'
  },
  {
    path: '',
    loadChildren: () => import('./Schedule/schedule.routes')
  }
];
