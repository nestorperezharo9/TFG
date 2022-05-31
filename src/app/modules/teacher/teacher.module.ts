import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherRoutingModule } from './teacher-routing.module';
import { TeachersComponent } from './teachers/teachers.component';
import { FileTeacherComponent } from './file-teacher/file-teacher.component';



@NgModule({
  declarations: [
    TeachersComponent,
    FileTeacherComponent,
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }