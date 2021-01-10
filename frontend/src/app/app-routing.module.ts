import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCoursesComponent } from '../app/course/list-courses/list-courses.component';
import { ListStudentsComponent } from './student/list-students/list-students.component';
import { ListTeachersComponent } from './teacher/list-teachers/list-teachers.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: ListCoursesComponent },
  { path: 'teachers', component: ListTeachersComponent },
  { path: 'students', component: ListStudentsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
