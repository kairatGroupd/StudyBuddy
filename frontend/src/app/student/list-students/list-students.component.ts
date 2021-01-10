import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  public studentList: Student[];

  constructor(
    private apiService: ApiService
  ) { }

  private getStudents() {
    this.apiService.getStudentList()
    .subscribe(data => {
      this.studentList = data;
    });
  }

  ngOnInit(): void {
    this.getStudents();
  }

}
