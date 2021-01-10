import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../models/teacher.model';
import { ApiService } from '../../services/api.service';
declare var $: any;

@Component({
  selector: 'app-list-teachers',
  templateUrl: './list-teachers.component.html',
  styleUrls: ['./list-teachers.component.css']
})
export class ListTeachersComponent implements OnInit {

  public teacherList: Teacher[];
  public selectedTeacher: Teacher;

  constructor(
    private apiService: ApiService
  ) { }

  private getTeachers() {
    this.apiService.getTeacherList()
    .subscribe(data => {
      this.teacherList = data;
    });
  }

  private defaultSelectedTeacher() {
    this.selectedTeacher = new Teacher();
    this.selectedTeacher.firstName = "";
    this.selectedTeacher.lastName = "";
    this.selectedTeacher.emailAddress = "";
    this.selectedTeacher.teacherSalary = 0;
  }

  ngOnInit(): void {
    this.defaultSelectedTeacher();
    this.getTeachers();
  }

  public selectTeacher(firstName: String) {
    for(var i=0; i<this.teacherList.length; i++) {
      if(this.teacherList[i].firstName == firstName) {
        this.selectedTeacher = this.teacherList[i];
      }
    }
  }

  public showSalary() {
    $("#salaryText").html('Salary: ' + this.selectedTeacher.teacherSalary);
  }

  public closeSalary() {
    $("#salaryText").html('Show salary');
  }

}
