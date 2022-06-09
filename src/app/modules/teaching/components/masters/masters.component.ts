import { Component, OnInit } from '@angular/core';
import { Master } from 'src/app/model/master.model';
import { Department, Signature, Specialty } from 'src/app/model/signature.model';
import { MasterService } from 'src/app/services/master.service';
import { SignatureService } from 'src/app/services/signature.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-masters',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.scss']
})
export class MastersComponent implements OnInit {

  public masters: Master[] = []
  public signatures: { [key: string]: Signature[] } = {}
  public isAdmin : boolean

  constructor(
    private masterService: MasterService,
    private userService: UserService,
    private signatureService: SignatureService
  ) { }

  async ngOnInit(): Promise<void> {
    const user = this.userService.actualUser.getValue();
    this.isAdmin = this.userService.isAdmin(user);
    this.masters = await this.masterService.findAll();
    this.getSignatures();
  }

  public deleteMaster(id: string) {
    this.masterService.delete(id).then(() => {
      this.masters = this.masters.filter(item => item.id !== id);
    });
  }

  private getSignatures() {
    this.masters.forEach(async(master) => {
      this.signatures[master.name] = await this.signatureService.findByCourseId(master.id);
    });
}

}
