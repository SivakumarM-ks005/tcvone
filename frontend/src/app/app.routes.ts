import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Layout } from './layout/layout';
import { Dashboard } from './dashboard/dashboard';
import { lastValueFrom } from 'rxjs';
import { RouteGuardService } from './services/route-guard-service';

export const routes: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'login',
        loadComponent: () => import('./login/login').then(m => m.Login)
    },
 
     {
        path: 'tcv',
       component:Layout,
        children: [
            {path: '', redirectTo:'dashboard', pathMatch:'full'},
            {
                 path: '',
                 loadComponent: () => import('./dashboard/dashboard').then(m => m.Dashboard),
                 canActivate:[RouteGuardService],
                 data:{
                    expectedRole:['admin','user']
                 }
            },
            // {
            //     path: 'dashboard',
            //     loadComponent: () => import('./dashboard/dashboard').then(m => m.Dashboard)
            // }
        ]
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
