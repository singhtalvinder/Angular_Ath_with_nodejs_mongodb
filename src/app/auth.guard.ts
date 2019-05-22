import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthService} from './auth.service';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _authService : AuthService,
    private _router : Router) {}

    canActivate() : boolean {
      if(this._authService.loggedIn()) {
        return true
      } else {
        // navigate to the login page.
        this._router.navigate(['/login'])
        return false
      }
    }
  }
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   return true;
  // }

