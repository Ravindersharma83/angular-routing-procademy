import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit , OnDestroy {

  course !: string;
  courseId !: string;
  routeParamObs !: any;

  constructor(private activatedRoute : ActivatedRoute){}

  ngOnInit(): void {
    // this.courseId = this.activatedRoute.snapshot.paramMap.get('id') || '';

    // snapshot property only return the initial value of the route . in some reason if the initial value of the route parameter changes than snapshot property does not return the updated value so to overcome this scneraio we use observable to handle this
    this.routeParamObs = this.activatedRoute.paramMap.subscribe((param)=>{
      this.courseId = param.get('id') || '';
      console.log(this.courseId);
      
    })
    
    // now we use this id to perform many operation using api's and other stuff
    // this.course = this.service.courses.find(x => x.id == this.courseId);
  }

  ngOnDestroy(): void {
    this.routeParamObs.unsubscribe();
  }
}
