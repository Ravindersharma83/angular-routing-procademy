import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError  } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private activatedRoute:ActivatedRoute, private router : Router){}

  displayLoadingIndicator:boolean = false;

  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe((value)=>{
      console.log(value);
      this.jumpTo(value);
    })

    this.router.events.subscribe((routerEvent:Event)=>{
      if(routerEvent instanceof NavigationStart){
        this.displayLoadingIndicator = true;
      }
      if(routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError){
        this.displayLoadingIndicator = false;
      }
    });
  }

  jumpTo(section : any){
    document.getElementById(section)?.scrollIntoView({behavior:'smooth'});
  }

  title = 'angular-routing-procademy';
}
