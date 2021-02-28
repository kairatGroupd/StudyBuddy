import { Component, OnInit } from '@angular/core';
import { Course } from '../models';
import { CourseService } from '../services/api/course-service/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public courseList: Course[];
  public Course = new Course();

  constructor(
    private courseService: CourseService
  ) { }

  private getCourses() {
    this.courseService.getCourseList()
    .subscribe(data => {
      this.courseList = data;
    });
  }

  ngOnInit(): void {
    this.getCourses();
  }

  

}
