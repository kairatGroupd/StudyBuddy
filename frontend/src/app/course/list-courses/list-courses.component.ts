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

  constructor(
    private apiService: ApiService
  ) { }

  private getCourses() {
    this.apiService.getCourseList()
    .subscribe(data => {
      this.courseList = data;
    });
  }

  ngOnInit(): void {
    this.getCourses();
  }


}
