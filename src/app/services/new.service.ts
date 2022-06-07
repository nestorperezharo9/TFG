import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { New } from "../model/new.model";

@Injectable({
    providedIn: 'root'
})
export class NewService {

    constructor(
        private httpService: HttpClient
    ) {}

    public async getAllNewsAll(): Promise<New[]> {
        return this.httpService.get<New[]>("http://localhost:8080/news/all").toPromise();
    }

    public async create(news: any): Promise<void> {
        return this.httpService.post<void>("http://localhost:8080/news/create", news).toPromise();
    }

    public async delete(id: string): Promise<void> {
        return this.httpService.get<void>(`http://localhost:8080/news/delete/${id}`).toPromise();
    }
}