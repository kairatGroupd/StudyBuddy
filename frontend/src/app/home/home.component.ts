import { Component, OnInit } from '@angular/core';
import { Course } from '../models';
import { CourseService } from '../services/api/course-service/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public courseList: Course[];
  public shortCourseList: Course[];
  public Course = new Course();

  constructor(private courseService: CourseService, private router: Router) {
    this.courseList = [];
    this.shortCourseList = [];
  }

  private getCourses() {
    this.courseService.getCourseList()
    .subscribe(data => {
      this.courseList = data;
    });
  }

  private makeShortList() {
    for(let i=0 ;i<6; i++){ 
      this.shortCourseList.push(this.courseList.pop())
    }
  }

  ngOnInit(): void {
    this.getCourses();
    this.makeShortList();
  }

}
