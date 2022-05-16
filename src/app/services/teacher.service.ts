import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Teacher } from "../model/teacher.model";

@Injectable({
    providedIn: 'root'
})
export class TeacherService {
    constructor(
        private httpService: HttpClient
    ) {}

    public async findByStaff(staff: string): Promise<Teacher[]> {
        return this.httpService.get<Teacher[]>(`http://localhost:8080/teachers/${staff}`).toPromise();
    }
}