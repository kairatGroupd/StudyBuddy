import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListTeachersComponent } from './list-teachers/list-teachers.component';

@NgModule({
  declarations: [
    ListTeachersComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TeacherModule { }
