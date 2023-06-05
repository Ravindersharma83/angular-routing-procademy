import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

// to use one service into another service we use @Injectable
@Injectable()

export class CourseGuardService implements CanActivate{
    constructor(private authService:AuthService, private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean{
        // return true;  // user can access it
        //return false;  // if false , user does not access it

        if(this.authService.isAuthenticated()){
            return true;
        }else{
            this.router.navigate(['']);
            return false;
        }
    }
}


// 1. creating a course-guard-service in which we use canActivate route guard that is used for restrict unauthorized user to access the course component.

// 2. After creating this guard file we need to register it inside the app module