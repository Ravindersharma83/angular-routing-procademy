import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  //Navigate between routes programatically
  constructor(private route : Router, private activatedRoute : ActivatedRoute){}

  navigateToHome(){
    this.route.navigate(["Home"]);
    // this.route.navigateByUrl('Home');    
    // this.route.navigate(["Home"],{relativeTo: this.activatedRoute});   // (append home to current activated route page (About.html))
  }
}
