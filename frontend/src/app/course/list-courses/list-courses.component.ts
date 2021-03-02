import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/api/course-service/course.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {

  public courseList: Course[];
  public selectedCourse: Course;
  public seeCourse: any;
  public addCourse: Course;

  constructor(private courseService: CourseService,
              private router: Router, 
              private route: ActivatedRoute) {
    this.addCourse = new Course();
    this.selectedCourse = new Course();
    this.seeCourse = new Course();
  }

  private getCourses() {
    this.courseService.getCourseList()
    .subscribe(data => {
      this.courseList = data;
    });
  }

  ngOnInit(): void {
    this.getCourses();
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.courseService.getCourseById(id)
        .subscribe({
          next: course => this.seeCourse = course,
          error: err => console.log(err)
        });
    }
  }

  public onSubmit() {
    // if (this.courseList.includes(this.addCourse)) {
    //   alert('This course is already in the program!');
    //   return;
    // }
    if (this.addCourse.courseName == "") {
      alert("Course name can\'t be empty!");
      return;
    }
    if (this.addCourse.coursePoints < 0) {
      alert("Course points can\'t must be above 0");
      return;
    }

    this.courseService.addCourse(this.addCourse)
      .subscribe(response => {
        console.log(response)},
                 error => {
        console.log(error);
      });
      setTimeout(() => {
        window.location.reload();
      }, 100);
  }

  public onSelect(course: Course) {
    this.selectedCourse = course;
  }

  public enrollCourse() {
    alert("You have enrolled in this course");
  }

  public editCourse(course: Course) {
    this.addCourse = course;
  }

  public deleteCourse(course: Course) {
    this.courseService.deleteCourse(course.id);
  }

  public cleanCourse() {
    this.addCourse = new Course();
  }

}
