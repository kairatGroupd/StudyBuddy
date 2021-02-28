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
  public course = new Course();
  public showDetails = true;

  constructor(
    private courseService: CourseService
  ) { }

  private defaultCourse() {
    this.course.courseName = "";
    this.course.coursePoints = 0;
  }

  private getCourses() {
    this.courseService.getCourseList()
    .subscribe(data => {
      this.courseList = data;
    });
  }

  ngOnInit(): void {
    this.defaultCourse();
    this.getCourses();
  }

  public onSubmit() {
    if (this.course.courseName == '') {
      alert('Course name can\'t be empty!');
      return;
    }
    if (this.course.coursePoints < 0) {
      alert('Course points can\'t must be above 0');
      return;
    }
    this.courseService.addCourse(this.course)
    .subscribe((response) => {
      console.log(response)}, (error) => {
        console.log(error);
      });
    setTimeout(()=>{
      window.location.reload();
    }, 100);
  }

  public enroll() {
    alert("You have enrolled in this course");
  }

}
