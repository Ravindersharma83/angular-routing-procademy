import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe((value)=>{
      console.log(value);
      this.jumpTo(value);
      
    })
  }

  jumpTo(section : any){
    document.getElementById(section)?.scrollIntoView({behavior:'smooth'});
  }
  title = 'angular-routing-procademy';
}
