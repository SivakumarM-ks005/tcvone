import { Injectable } from '@angular/core';
import { AuthService } from './auth-service';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { SnackbarService } from './snackbar-service';
import { jwtDecode } from 'jwt-decode';
import { globalConstants } from '../shared/global-constants';

@Injectable({
  providedIn: 'root',
})
export class RouteGuardService {
  
  constructor( private auth : AuthService, private router : Router,
    private snackbarService: SnackbarService
  ){}
  
  canActivate(route: ActivatedRouteSnapshot):boolean{
    let expectedRoleArray = route.data?.['expectedRole'];
    // expectedRoleArray = expectedRoleArray.expectedRole
    const token:any = localStorage.getItem('token');
    var tokenPaylod:any;
    try {
      tokenPaylod = jwtDecode(token);
    } catch (error) {
      localStorage.clear();
      this.router.navigate(['/']);
    }
    let checkRole = false;
    for (let i=0; i<expectedRoleArray.length; i++){
      if(expectedRoleArray[i] == tokenPaylod.role){
        checkRole = true;
      }
    }
    if(tokenPaylod.role === 'user' || tokenPaylod.role === 'admin'){
      if(this.auth.isAuthendicated() && checkRole){
      return true;
      }
        this.snackbarService.openSnackBar(globalConstants.unauthorized, globalConstants.errorRegex);
       this.router.navigate(['/dashboard']);
       return false;
     
    }else {
      this.router.navigate(['/']);
      localStorage.clear();
      return false;
    }
  }
}
