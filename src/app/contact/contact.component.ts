import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  firstname !: string;
  lastname !: string;
  country !: string;
  subject !: string;

  constructor(){}

  canExit(){
    if(this.firstname || this.lastname || this.country || this.subject)
    {
      return confirm("You have unsaved changes. Do you really want to discard these changes ?");
    }
    else
    {
      return true;
    }
  }
}
