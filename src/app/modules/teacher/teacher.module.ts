import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherRoutingModule } from './teacher-routing.module';
import { TeachersComponent } from './teachers/teachers.component';
import { AdminsComponent } from './admins/admins.component';



@NgModule({
  declarations: [
    TeachersComponent,
    AdminsComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }