import { Routes } from '@angular/router';
import { RouteGuardService } from './services/route-guard-service';
import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';
import { Layout } from './layout/layout';
import { BrandsList } from './products/brands-list/brands-list';

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
  loadComponent: () =>
    import('./dashboard/dashboard').then(
      (c) => c.Dashboard
    )
},
{
  path: 'brands',
  loadComponent: () =>
    import('./products/brands-list/brands-list').then(
      (c) => c.BrandsList
    )
}
    ]
  },
  { path: '**', component: Login }
];