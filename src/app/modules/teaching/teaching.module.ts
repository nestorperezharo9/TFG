import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DegreesComponent } from './components/degrees/degrees.component';
import { MastersComponent } from './components/masters/masters.component';
import { DoctoratesComponent } from './components/doctorates/doctorates.component';
import { TeachingRoutingModule } from './teaching-routing.module';



@NgModule({
  declarations: [
    DegreesComponent,
    MastersComponent,
    DoctoratesComponent
  ],
  imports: [
    CommonModule,
    TeachingRoutingModule
  ]
})
export class TeachingModule { }
