import { Routes } from "@angular/router";
import ScheduleComponent from "./views/schedule/index.component";

const scheduleRoutes:Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'schedule',
  },
  {
    path: '',
    component: ScheduleComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./views/schedule/index.component'),
      },
    ]
  },
];

export default scheduleRoutes;