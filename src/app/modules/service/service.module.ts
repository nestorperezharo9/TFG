import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './components/rooms/rooms.component';
import { SecurityComponent } from './components/security/security.component';
import { ServiceRoutingModule } from './service-routing.module';
import { FileRoomComponent } from './components/file-room/file-room.component';


@NgModule({
  declarations: [
    RoomsComponent,
    SecurityComponent,
    FileRoomComponent
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule
  ]
})
export class ServiceModule { }