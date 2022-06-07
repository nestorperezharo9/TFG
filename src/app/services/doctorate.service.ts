import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Doctorate } from "../model/doctorate.model";

@Injectable({
    providedIn: 'root'
})
export class DoctorateService {
    constructor(
        private httpService: HttpClient
    ) {}

    public async findAll(): Promise<Doctorate[]> {
        return this.httpService.get<Doctorate[]>("http://localhost:8080/doctorates/all").toPromise();
    }

    public async create(doctorate: any): Promise<void> {
        return this.httpService.post<void>("http://localhost:8080/doctorates/create", doctorate).toPromise();
    }
}