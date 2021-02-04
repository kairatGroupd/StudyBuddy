import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {

  public courseList: Course[];
  public course = new Course;

  constructor(
    private apiService: ApiService
  ) { }

  private defaultCourse() {
    this.course.courseName = "";
    this.course.coursePoints = 0;
  }

  private getCourses() {
    this.apiService.getCourseList()
    .subscribe(data => {
      this.courseList = data;
    });
  }

  ngOnInit(): void {
    this.defaultCourse();
    this.getCourses();
  }

  public onSubmit() {
    this.apiService.addCourse(this.course)
    .subscribe((response) => {
      console.log(response)}, (error) => {
        console.log(error);
      });
  }

  public enroll() {
    alert("You have enrolled in this course");
  }

}
