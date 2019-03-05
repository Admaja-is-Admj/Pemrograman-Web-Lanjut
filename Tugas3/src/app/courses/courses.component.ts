import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  // title = 'Belajar Angular';
  // Courses;
  // binding = 'property-binding';
  // imageUrl = 'http://lorempixel.com/400/200';
  // colSpan = 2;
  // isActive = false;
  title = 'Angular';
  point = '3 Author';
  Courses;
  constructor(private service:CoursesService) {
    this.Courses = service.getCourses(); 
    this.Courses = service.getCourses();
  }
  ngOnInit() {
  }

}
