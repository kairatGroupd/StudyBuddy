import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseURL = "http://localhost:9090/api/courses";

  constructor(private httpClient: HttpClient) { }

  public getCourseList(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`${this.baseURL}`);
  }

  public getCourseById(id: number): Observable<Object> {
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }

  public addCourse(course: Course): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/add`, course);
  }

  public updateCourse(id: number, course: Course): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/add/${id}`, course);
  }

  public deleteCourse(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
  }
  
}
