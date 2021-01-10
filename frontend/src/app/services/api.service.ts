import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course, Teacher, Student } from '../models/index';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL = "http://localhost:9090/api";

  constructor(
    private httpClient: HttpClient
  ) { }

  public getCourseList(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`${this.baseURL}/courses`);
  }

  public getStudentList(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${this.baseURL}/students`);
  }

  public getTeacherList(): Observable<Teacher[]> {
    return this.httpClient.get<Teacher[]>(`${this.baseURL}/teachers`);
  }

}
