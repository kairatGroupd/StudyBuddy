import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';
import { StudentService } from '../../services/api/student-service/student.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  public studentList: Student[];
  public addStudent: Student;
  public selectedStudent: Student;

  constructor(private studentService: StudentService) {
    this.addStudent = new Student();
    this.addStudent.studentPoints = 0;
    this.selectedStudent = new Student();
  }

  private getStudents() {
    this.studentService.getStudentList()
    .subscribe(data => {
      this.studentList = data;
    });
  }

  ngOnInit(): void {
    this.getStudents();
  }

  public onSubmit() {
    if (this.addStudent.firstName == null || this.addStudent.firstName == "") {
      alert("First name can\'t be empty!");
      return;
    }
    if (this.addStudent.lastName == null || this.addStudent.lastName == "") {
      alert("Last name can\'t be empty!");
      return;
    }
    if (this.addStudent.emailAddress == null || this.addStudent.emailAddress == "") {
      alert("Email address can\'t be empty!");
      return;
    }
    if (this.addStudent.homeAddress == null || this.addStudent.homeAddress == "") {
      alert("Home address can\'t be empty!");
      return;
    }
    if (this.addStudent.password == null || this.addStudent.password == "") {
      alert("Password can\'t be empty!");
      return;
    }

    this.studentService.addStudent(this.addStudent)
      .subscribe(response => {
        console.log(response)},
                 error => {
        console.log(error);
      });
      setTimeout(() => {
        window.location.reload();
      }, 100);
  }

  public onSelect(student: Student) {
    this.selectedStudent = student;
  }

  public editStudent(student: Student) {
    this.addStudent = student;
  }

  public deleteStudent(student: Student) {
    this.studentService.deleteStudent(student.id);
  }

  public cleanStudent() {
    this.addStudent = new Student();
  }

}
