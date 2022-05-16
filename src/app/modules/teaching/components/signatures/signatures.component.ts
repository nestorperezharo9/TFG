import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Department, Signature, SignatureCharacter, SignatureType, Specialty } from 'src/app/model/signature.model';
import { SignatureService } from 'src/app/services/signature.service';

@Component({
  selector: 'app-signatures',
  templateUrl: './signatures.component.html',
  styleUrls: ['./signatures.component.scss']
})
export class SignaturesComponent implements OnInit {

  public signature: Signature
  
  private id: string

  constructor(
    private signatureService: SignatureService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.id = data['id'];
      this.getSignature();
    });
  }

  public getSpecialty(specialty: string) {
    return Specialty[specialty];
  }
  public getDepartment(department: string) {
    return Department[department];
  }
  public getType(type: string) {
    return SignatureType[type];
  }

  public getCharacter(character: string) {
    return SignatureCharacter[character];
  }

  private async getSignature() {
    this.signature = await this.signatureService.findById(this.id);
  }

}
