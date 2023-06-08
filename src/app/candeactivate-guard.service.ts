import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { ContactComponent } from "./contact/contact.component";

// to use one service into another service we use @Injectable
@Injectable()

export class CanDeactivateGuardService implements CanDeactivate<ContactComponent>{
    // constructor(private authService:AuthService, private router: Router){}
    canDeactivate(component:ContactComponent, currentRoute:ActivatedRouteSnapshot,currentState:RouterStateSnapshot,nextState:RouterStateSnapshot){
        // return false;  // if it return false than we are not allowed to navigate to other pages except on contact
        return component.canExit();  // we call canExit() function from contact-component to get the boolean result in output.
    }
}


// First we create a canDeactivate route guard service than we provide this service to app.module.ts. And this use this in our routes 