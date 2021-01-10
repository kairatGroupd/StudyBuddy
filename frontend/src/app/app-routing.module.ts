import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCoursesComponent } from '../app/course/list-courses/list-courses.component';
import { ListStudentsComponent } from './student/list-students/list-students.component';
import { ListTeachersComponent } from './teacher/list-teachers/list-teachers.component';

const routes: Routes = [
  { path: 'courses', component: ListCoursesComponent },
  { path: 'teachers', component: ListTeachersComponent },
  { path: 'students', component: ListStudentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
