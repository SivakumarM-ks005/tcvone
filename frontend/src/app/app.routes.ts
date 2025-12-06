import { Routes } from '@angular/router';
import { RouteGuardService } from './services/route-guard-service';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
    // {
    //     path: '', redirectTo: 'login', pathMatch: 'full'
    // },
    {
        path: '',
        loadComponent: () => import('./login/login').then(n => n.Login)
    },

    {
        path: '',
        loadComponent: () => import('./layout/layout').then(n => n.Layout),
        children: [            
            {
                path:'dashboard',
                loadComponent: () => import('./dashboard/dashboard').then(n => n.Dashboard),
                // canActivate: [RouteGuardService],
                // data: { expectedRole: ['user', 'admin'] }
            },
        ]
    },
    {
        path: '**',
        redirectTo: 'login',
        pathMatch:'full'
    }

]
