import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class UserService {

    constructor(
        private httpService: HttpClient
    ) {}

    public async login(user): Promise<void> {
        return this.httpService.post<void>("http://localhost:8080/login", user, {headers: {"Access-Control-Allow-Origin": "*"}}).toPromise();
    }
}