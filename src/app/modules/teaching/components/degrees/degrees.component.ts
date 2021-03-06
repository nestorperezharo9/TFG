import { Component, OnInit } from '@angular/core';
import { Degree } from 'src/app/model/degree.model';
import { Department, Signature, Specialty } from 'src/app/model/signature.model';
import { DegreeService } from 'src/app/services/degree.service';
import { SignatureService } from 'src/app/services/signature.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-degrees',
  templateUrl: './degrees.component.html',
  styleUrls: ['./degrees.component.scss']
})
export class DegreesComponent implements OnInit {

  public degrees: Degree[] = []
  public signatures: { [key: string]: Signature[] } = {}
  public isAdmin: boolean

  constructor(
    private degreeService: DegreeService,
    private userService: UserService,
    private signatureService: SignatureService
  ) { }

  async ngOnInit(): Promise<void> {
    const user = this.userService.actualUser.getValue();
    this.isAdmin = this.userService.isAdmin(user);
    this.degrees = await this.degreeService.findAll();
    this.getSignatures();
  }

  public deleteDegree(id: string) {
    this.degreeService.delete(id).then(() => {
      this.degrees = this.degrees.filter(item => item.id !== id);
    });
  }

  private getSignatures() {
      this.degrees.forEach(async(degree) => {
        this.signatures[degree.name] = await this.signatureService.findByCourseId(degree.id);
      });
  }

}
