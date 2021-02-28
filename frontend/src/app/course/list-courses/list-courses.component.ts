import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/api/course-service/course.service';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {

  public courseList: Course[];
  public selectedCourse: Course;
  public addCourse: Course;
  public showDetails = true;

  constructor(private courseService: CourseService) {
    this.addCourse = new Course();
    this.selectedCourse = new Course();
  }

  private getCourses() {
    this.courseService.getCourseList()
    .subscribe(data => {
      this.courseList = data;
    });
  }

  ngOnInit(): void {
    this.getCourses();
  }

  public onSubmit() {
    if (this.addCourse.courseName == '') {
      alert('Course name can\'t be empty!');
      return;
    }
    if (this.addCourse.coursePoints < 0) {
      alert('Course points can\'t must be above 0');
      return;
    }
    this.courseService.addCourse(this.addCourse)
    .subscribe((response) => {
      console.log(response)}, (error) => {
        console.log(error);
      });
    setTimeout(()=>{
      window.location.reload();
    }, 100);
  }

  public enrollCourse() {
    alert("You have enrolled in this course");
  }

  public deleteCourse(course: Course) {
    this.courseService.deleteCourse(course.id);
  }

  public onSelect(course: Course) {
    this.selectedCourse = course;
  }

  public cleanCourse() {
    this.addCourse = new Course();
  }

}
