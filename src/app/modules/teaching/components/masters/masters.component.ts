import { Component, OnInit } from '@angular/core';
import { Master } from 'src/app/model/master.model';
import { Department, Signature, Specialty } from 'src/app/model/signature.model';
import { MasterService } from 'src/app/services/master.service';
import { SignatureService } from 'src/app/services/signature.service';

@Component({
  selector: 'app-masters',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.scss']
})
export class MastersComponent implements OnInit {

  public masters: Master[] = []
  public signatures: { [key: string]: Signature[] } = {}

  constructor(
    private masterService: MasterService,
    private signatureService: SignatureService
  ) { }

  async ngOnInit(): Promise<void> {
    this.masters = await this.masterService.findAll();
    this.getSignatures();
  }

  private getSignatures() {
    this.masters.forEach(async(master) => {
      this.signatures[master.name] = await this.signatureService.findByCourseId(master.id);
    });
}

}
