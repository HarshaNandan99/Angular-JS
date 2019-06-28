import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { HardAuthentificationService } from './hard-authentification.service';

@Injectable({
  providedIn: 'root'
})
export class RouteguardService implements CanActivate {

  constructor(private hardcodedAuthentificationService: HardAuthentificationService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcodedAuthentificationService.isUserLoggedIn())
      return true;
      this.router.navigate(['login']);
    return false;
  }
}
