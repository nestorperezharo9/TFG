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

    public async getAllTeachers(): Promise<Teacher[]> {
        return this.httpService.get<Teacher[]>(`http://localhost:8080/teachers/all`).toPromise();
    }

    public async findTeacherById(id: string): Promise<Teacher> {
        return this.httpService.get<Teacher>(`http://localhost:8080/teachers/${id}`).toPromise();
    }

    public async getAllDirective(): Promise<Teacher[]> {
        return this.httpService.get<Teacher[]>(`http://localhost:8080/teachers/directive`).toPromise();
    }

    public async create(teacher: any): Promise<void> {
        return this.httpService.post<void>("http://localhost:8080/teachers/teacher/create", teacher).toPromise();
    }

    public async delete(id: string): Promise<void> {
        return this.httpService.get<void>(`http://localhost:8080/teachers/delete/${id}`).toPromise();
    }
}