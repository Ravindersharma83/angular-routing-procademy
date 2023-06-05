import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course !: string;
  courseId !: string;

  constructor(private activatedRoute : ActivatedRoute){}

  ngOnInit(): void {
    this.courseId = this.activatedRoute.snapshot.paramMap.get('id') || '';
    
    // now we use this id to perform many operation using api's and other stuff
    // this.course = this.service.courses.find(x => x.id == this.courseId);
  }
}
