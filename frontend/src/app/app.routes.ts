import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Layout } from './layout/layout';
import { Dashboard } from './dashboard/dashboard';
import { lastValueFrom } from 'rxjs';

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
            {
                 path: 'dashboard',
                 component:Dashboard
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
