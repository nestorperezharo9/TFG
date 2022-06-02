import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewRoutingModule } from './new-routing.module';
import { NewsComponent } from './news/news.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';

@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    NewRoutingModule,
    NgxDocViewerModule
  ]
})
export class NewModule { }