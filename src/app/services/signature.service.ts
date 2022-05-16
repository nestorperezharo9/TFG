import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Signature } from "../model/signature.model";

@Injectable({
    providedIn: 'root'
})
export class SignatureService {

    constructor(
        private httpService: HttpClient
    ) {}

    public async findAll(): Promise<Signature[]> {
        return this.httpService.get<Signature[]>("http://localhost:8080/signatures/all").toPromise();
    }

    public async findByCourseId(courseId: string): Promise<Signature[]> {
        return this.httpService.get<Signature[]>(`http://localhost:8080/signatures/${courseId}`).toPromise();
    }
}