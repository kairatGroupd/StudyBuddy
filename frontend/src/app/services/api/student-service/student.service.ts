import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../../../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseURL = "http://localhost:9090/api/students";
  
  constructor(private httpClient: HttpClient) { }

  public getStudentList(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${this.baseURL}`);
  }

  public addStudent(student: Student): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/add`, student);
  }

  public updateStudent(id: number, student: Student): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/add/${id}`, student);
  }
}
