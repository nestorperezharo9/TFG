import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Degree } from "../model/degree.model";

@Injectable({
    providedIn: 'root'
})
export class DegreeService {
    constructor(
        private httpService: HttpClient
    ) {}

    public async findAll(): Promise<Degree[]> {
        return this.httpService.get<Degree[]>("http://localhost:8080/degrees/all").toPromise();
    }

    public async create(degree: any): Promise<void> {
        return this.httpService.post<void>("http://localhost:8080/degrees/create", degree).toPromise();
    }

    public async delete(id: string): Promise<void> {
        return this.httpService.get<void>(`http://localhost:8080/degrees/delete/${id}`).toPromise();
    }
}