import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherRoutingModule } from './teacher-routing.module';
import { TeachersComponent } from './teachers/teachers.component';
import { FileTeacherComponent } from './file-teacher/file-teacher.component';
import { StudentsComponent } from './students/students.component';
import { TeachersFormComponent } from './teachers/teachers-form/teachers-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectorMultipleComponent } from 'src/app/components/selector-multiple/selector-multiple.component';

@NgModule({
  declarations: [
    TeachersComponent,
    FileTeacherComponent,
    StudentsComponent,
    TeachersFormComponent,
    SelectorMultipleComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TeacherModule { }