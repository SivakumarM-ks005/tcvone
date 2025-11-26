import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Layout } from './layout/layout';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'login',
        loadComponent: () => import('./login/login').then(m => m.Login)
    },
    // {
    //     path: 'layout',
    //     component: Layout
        // loadComponent: () => import('./layout/layout').then(n => n.Layout),
        // pathMatch: 'full'
    // },
     {
        path: 'layout',
       component:Dashboard,
        children: [
            {
                 path: 'dashboard',
                 component:Dashboard
            },
    //         {
    //             path: 'dashboard',
    //             loadComponent: () => import('./dashboard/dashboard').then(m => m.Dashboard)
    //         }
        ]
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
