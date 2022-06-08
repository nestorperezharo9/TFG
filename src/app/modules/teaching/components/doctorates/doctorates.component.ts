import { Component, OnInit } from '@angular/core';
import { Doctorate } from 'src/app/model/doctorate.model';
import { Department, Signature, Specialty } from 'src/app/model/signature.model';
import { DoctorateService } from 'src/app/services/doctorate.service';
import { SignatureService } from 'src/app/services/signature.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-doctorates',
  templateUrl: './doctorates.component.html',
  styleUrls: ['./doctorates.component.scss']
})
export class DoctoratesComponent implements OnInit {

  public doctorates: Doctorate[] = []
  public signatures: { [key: string]: Signature[] } = {}
  public isAdmin: boolean

  constructor(
    private doctorateService: DoctorateService,
    private userService: UserService,
    private signatureService: SignatureService
  ) { }

  async ngOnInit(): Promise<void> {
    const user = this.userService.actualUser.getValue();
    this.isAdmin = this.userService.isAdmin(user);
    this.doctorates = await this.doctorateService.findAll();
    this.getSignatures();
  }

  private getSignatures() {
    this.doctorates.forEach(async(doctorate) => {
      this.signatures[doctorate.name] = await this.signatureService.findByCourseId(doctorate.id);
    });
}

}
