import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnowusComponent } from './components/knowus/knowus.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { TheDepartmentRoutingModule } from './theDepartment-routing.module';


@NgModule({
  declarations: [
    KnowusComponent,
    DirectiveComponent
  ],
  imports: [
    CommonModule,
    TheDepartmentRoutingModule
  ]
})
export class TheDepartmentModule { }