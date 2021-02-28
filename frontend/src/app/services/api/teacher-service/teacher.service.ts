import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../../../models/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private baseURL = "http://localhost:9090/api/teachers";

  constructor(private httpClient: HttpClient) { }

  public getTeachersList(): Observable<Teacher[]> {
    return this.httpClient.get<Teacher[]>(`${this.baseURL}`);
  }
  
}
