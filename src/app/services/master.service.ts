import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Master } from "../model/master.model";

@Injectable({
    providedIn: 'root'
})
export class MasterService {
    constructor(
        private httpService: HttpClient
    ) {}

    public async findAll(): Promise<Master[]> {
        return this.httpService.get<Master[]>("http://localhost:8080/masters/all").toPromise();
    }

    public async create(master: any): Promise<void> {
        return this.httpService.post<void>("http://localhost:8080/masters/create", master).toPromise();
    }
}