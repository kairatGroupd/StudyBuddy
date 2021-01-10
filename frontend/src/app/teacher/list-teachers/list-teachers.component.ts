import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../models/teacher.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-list-teachers',
  templateUrl: './list-teachers.component.html',
  styleUrls: ['./list-teachers.component.css']
})
export class ListTeachersComponent implements OnInit {

  public teacherList: Teacher[];

  constructor(
    private apiService: ApiService
  ) { }

  private getTeachers() {
    this.apiService.getTeacherList()
    .subscribe(data => {
      this.teacherList = data;
    });
  }

  ngOnInit(): void {
    this.getTeachers();
  }

}
