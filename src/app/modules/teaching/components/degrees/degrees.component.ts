import { Component, OnInit } from '@angular/core';
import { Degree } from 'src/app/model/degree.model';
import { Department, Signature, Specialty } from 'src/app/model/signature.model';
import { DegreeService } from 'src/app/services/degree.service';
import { SignatureService } from 'src/app/services/signature.service';

@Component({
  selector: 'app-degrees',
  templateUrl: './degrees.component.html',
  styleUrls: ['./degrees.component.scss']
})
export class DegreesComponent implements OnInit {

  public degrees: Degree[] = []
  public signatures: Signature[] = []

  constructor(
    private degreeService: DegreeService,
    private signatureService: SignatureService
  ) { }

  async ngOnInit(): Promise<void> {
    this.degrees = await this.degreeService.findAll();
    console.log(this.degrees);
    this.signatures = await this.signatureService.findAll();
  }

  getDepartmentValue(department: Department) {
    return Department[department];
  }

}
