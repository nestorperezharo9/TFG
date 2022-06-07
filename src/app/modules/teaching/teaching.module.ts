import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DegreesComponent } from './components/degrees/degrees.component';
import { MastersComponent } from './components/masters/masters.component';
import { DoctoratesComponent } from './components/doctorates/doctorates.component';
import { TeachingRoutingModule } from './teaching-routing.module';
import { SignaturesComponent } from './components/signatures/signatures.component';
import { DegreesFormComponent } from './components/degrees/degrees-form/degrees-form.component';
import { DoctoratesFormComponent } from './components/doctorates/doctorates-form/doctorates-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MastersFormComponent } from './components/masters/masters-form/masters-form.component';



@NgModule({
  declarations: [
    DegreesComponent,
    MastersComponent,
    DoctoratesComponent,
    SignaturesComponent,
    DegreesFormComponent,
    DoctoratesFormComponent,
    MastersFormComponent
  ],
  imports: [
    CommonModule,
    TeachingRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TeachingModule { }
