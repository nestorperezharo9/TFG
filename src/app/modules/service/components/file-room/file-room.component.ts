import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Room } from 'src/app/model/room.model';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-file-room',
  templateUrl: './file-room.component.html',
  styleUrls: ['./file-room.component.scss']
})
export class FileRoomComponent implements OnInit {

  public room: Room
  public rooms: Room[] = [];
  
  private id: string

  constructor(
    private roomService: RoomService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.route.params.subscribe(data => {
        this.id = data['id'];
        this.getRoomById();
      });
  }

  private async getRoomById() {
    this.room = await this.roomService.findRoomById(this.id);
  }

}
