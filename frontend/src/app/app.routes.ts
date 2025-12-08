import { Routes } from '@angular/router';
import { RouteGuardService } from './services/route-guard-service';
import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';
import { Layout } from './layout/layout';

export const routes: Routes =[
  { path: '', component: Login },
  {
    path: 'tcv',
    component: Layout,
    children: [
      {
        path: '',
        redirectTo: '/tcv/dashboard',
        pathMatch: 'full',
      },
      
      {
        path: 'dashboard',
        // loadChildren: () => import('./dashboard/dashboard').then(n => n.Dashboard),
        component:Dashboard
      }
    ]
  },
  { path: '**', component: Login }
];