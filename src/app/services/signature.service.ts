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
        return this.httpService.get<Signature[]>(`http://localhost:8080/signatures/course/${courseId}`).toPromise();
    }

    public async findById(id: string): Promise<Signature> {
        return this.httpService.get<Signature>(`http://localhost:8080/signatures/${id}`).toPromise();
    }

    public async createSignatureDegree(signature: any): Promise<void> {
        return this.httpService.post<void>("http://localhost:8080/degrees/signature/create", signature).toPromise();
    }

    public async createSignatureMaster(signature: any): Promise<void> {
        return this.httpService.post<void>("http://localhost:8080/masters/signature/create", signature).toPromise();
    }

    public async createSignatureDoctorate(signature: any): Promise<void> {
        return this.httpService.post<void>("http://localhost:8080/doctorates/signature/create", signature).toPromise();
    }

    public async delete(id: string): Promise<void> {
        return this.httpService.get<void>(`http://localhost:8080/signatures/delete/${id}`).toPromise();
    }
}