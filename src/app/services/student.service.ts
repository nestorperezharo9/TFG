import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Student } from "../model/student.model";

@Injectable({
    providedIn: 'root'
})
export class StudentService {
    constructor(
        private httpService: HttpClient
    ) {}

    public async getAllStudents(): Promise<Student[]> {
        return this.httpService.get<Student[]>(`http://localhost:8080/students/all`).toPromise();
    }
}