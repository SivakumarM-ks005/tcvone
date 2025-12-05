import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const tokenInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  
  const router = inject(Router);

  const token = localStorage.getItem('token');

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {

      if (err.status === 401 || err.status === 403) {
        if(router.url === '/tcv'){}
          else{
            localStorage.clear();
            router.navigate(['/'])
          }
      }

      return throwError(() => err);
    })
  );
};