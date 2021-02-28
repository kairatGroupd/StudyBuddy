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
    
  }

  public selectStudent(student: Student) {
    this.selectedStudent = student;
  }

  public cleanStudent() {
    this.addStudent = new Student();
  }

}
