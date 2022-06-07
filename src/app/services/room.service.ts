import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Room } from "../model/room.model";

@Injectable({
    providedIn: 'root'
})
export class RoomService {

    constructor(
        private httpService: HttpClient
    ) {}

    public async findAll(): Promise<Room[]> {
        return this.httpService.get<Room[]>("http://localhost:8080/rooms/all").toPromise();
    }

    public async findRoomById(id: string): Promise<Room> {
        return this.httpService.get<Room>(`http://localhost:8080/rooms/${id}`).toPromise();
    }
}