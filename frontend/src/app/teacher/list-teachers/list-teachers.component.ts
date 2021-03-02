import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../models/teacher.model';
import { TeacherService } from '../../services/api/teacher-service/teacher.service';
declare var $: any;

@Component({
  selector: 'app-list-teachers',
  templateUrl: './list-teachers.component.html',
  styleUrls: ['./list-teachers.component.css']
})
export class ListTeachersComponent implements OnInit {

  public teacherList: Teacher[];
  public addTeacher: Teacher;
  public selectedTeacher: Teacher;

  constructor(private teacherService: TeacherService) {
    this.addTeacher = new Teacher();
    this.addTeacher.teacherSalary = 0;
    this.selectedTeacher = new Teacher();
  }

  private getTeachers() {
    this.teacherService.getTeachersList()
    .subscribe(data => {
      this.teacherList = data;
    });
  }

  ngOnInit(): void {
    this.getTeachers();
  }

  public onSubmit() {
    if (this.addTeacher.firstName == null || this.addTeacher.firstName == "") {
      alert("First name can\'t be empty!");
      return;
    }
    if (this.addTeacher.lastName == null || this.addTeacher.lastName == "") {
      alert("Last name can\'t be empty!");
      return;
    }
    if (this.addTeacher.emailAddress == null || this.addTeacher.emailAddress == "") {
      alert("Email address can\'t be empty!");
      return;
    }
    if (this.addTeacher.teacherSalary == null || this.addTeacher.teacherSalary < 0) {
      alert("Starting salary can\'t be empty or negative!");
      return;
    }
    if (this.addTeacher.password == null || this.addTeacher.password == "") {
      alert("Password can\'t be empty!");
      return;
    }

    this.teacherService.addTeacher(this.addTeacher)
      .subscribe(response => {
        console.log(response)},
                 error => {
        console.log(error);
      });
      setTimeout(() => {
        window.location.reload();
      }, 100);
  }

  public onSelect(teacher: Teacher) {
    this.selectedTeacher = teacher;
  }

  public editTeacher(teacher: Teacher) {
    this.addTeacher = teacher;
  }

  public deleteTeacher(teacher: Teacher) {
    this.teacherService.deleteTeacher(teacher.id);
  }

  public cleanTeacher() {
    this.addTeacher = new Teacher();
  }

  public showSalary() {
    $("#salaryText").html('Salary: ' + this.selectedTeacher.teacherSalary);
  }

  public closeSalary() {
    $("#salaryText").html('Show salary');
  }

}
