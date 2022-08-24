import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { UserService } from "./user.service";

@Injectable()
export class RouteGuardService implements CanActivate {

  constructor(private userService: UserService, private router : Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(!this.userService.isLogedId()){
      this.router.navigate(['/login']);
      return false;
    }

    return this.userService.hasRoles(route.data.role);
  }
}
