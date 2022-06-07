import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Room, TypeRoom } from 'src/app/model/room.model';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  public rooms: Room[] = []

  public roomsLab: Room[] = []
  public roomsAula: Room[] = []

  constructor(
    private roomService: RoomService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit(): Promise <void> {
    this.rooms = await this.roomService.findAll();
    this.getRooms();
  }

  private getRooms() {
    this.roomsAula = this.rooms.filter(room => room.typeRoom === TypeRoom.AULA);
    this.roomsLab = this.rooms.filter(room => room.typeRoom === TypeRoom.LAB);
    console.log(this.rooms);
  }

}
