import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListStudentsComponent } from './list-students/list-students.component';

@NgModule({
  declarations: [
    ListStudentsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class StudentModule { }
