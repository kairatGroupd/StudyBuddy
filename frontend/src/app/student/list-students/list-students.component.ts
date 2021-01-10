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
  public selectedStudent: Student;

  constructor(
    private apiService: ApiService
  ) { }

  private getStudents() {
    this.apiService.getStudentList()
    .subscribe(data => {
      this.studentList = data;
    });
  }

  private defaultSelectedStudent() {
    this.selectedStudent = new Student;
    this.selectedStudent.firstName = "";
    this.selectedStudent.lastName = "";
    this.selectedStudent.emailAddress = "";
    this.selectedStudent.homeAddress = "";
    this.selectedStudent.studentPoints = 0;
  }

  ngOnInit(): void {
    this.defaultSelectedStudent();
    this.getStudents();
  }

  public selectStudent(firstName: String) {
    for(var i=0; i<this.studentList.length; i++){
      if(this.studentList[i].firstName == firstName) {
        this.selectedStudent = this.studentList[i];
      }
    }
  }

}
