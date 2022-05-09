import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private httpService: HttpClient
    ) {}

    public async login(user): Promise<void> {
        return this.httpService.post<void>("http://localhost:8080/login", user, {headers: {"Access-Control-Allow-Origin": "*"}}).toPromise();
    }

    public async register(user): Promise<void> {
        return this.httpService.post<void>("http://localhost:8080/register", user, {headers: {"Access-Control-Allow-Origin": "*"}}).toPromise();
    }

    public async unsubscribe(user): Promise<void> {
        return this.httpService.delete<void>(`http://localhost:8080/unsubscribe/${user.identifier}`, {headers: {"Access-Control-Allow-Origin": "*"}}).toPromise();
    }
}