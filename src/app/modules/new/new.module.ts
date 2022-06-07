import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewRoutingModule } from './new-routing.module';
import { NewsComponent } from './news/news.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { NewsFormComponent } from './news/news-form/news-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewsComponent,
    NewsFormComponent
  ],
  imports: [
    CommonModule,
    NewRoutingModule,
    NgxDocViewerModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NewModule { }