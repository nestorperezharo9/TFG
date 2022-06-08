import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Rol, User } from "../model/user.model";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    public actualUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);

    constructor(
        private httpService: HttpClient
    ) {}

    public async login(user): Promise<User> {
        return this.httpService.post<User>("http://localhost:8080/login", user, {headers: {"Access-Control-Allow-Origin": "*"}}).toPromise();
    }

    public async register(user): Promise<void> {
        return this.httpService.post<void>("http://localhost:8080/register", user, {headers: {"Access-Control-Allow-Origin": "*"}}).toPromise();
    }

    public async unsubscribe(user): Promise<void> {
        return this.httpService.delete<void>(`http://localhost:8080/unsubscribe/${user.identifier}`, {headers: {"Access-Control-Allow-Origin": "*"}}).toPromise();
    }

    public setUserLogged(user: User) {
        this.actualUser.next(user);
    }

    public isAdmin(user: User) {
        if (user) {
            return user.roles.includes(Rol.ADMIN);
        }
        return false;
    }

    public isUser(user: User) {
        if (user) {
            return user.roles.includes(Rol.USER);
        }
        return false;
    }
}