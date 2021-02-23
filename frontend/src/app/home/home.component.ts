import { Component, OnInit } from '@angular/core';
import { Course } from '../models';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public courseList: Course[];
  public Course = new Course();

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
