
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department, Signature, SignatureCharacter, SignatureType, Specialty } from 'src/app/model/signature.model';
import { SignatureService } from 'src/app/services/signature.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signatures',
  templateUrl: './signatures.component.html',
  styleUrls: ['./signatures.component.scss']
})
export class SignaturesComponent implements OnInit {

  public signature: Signature

  public isAdmin : boolean

  private courseType: string = '';
  private id: string

  constructor(
    private signatureService: SignatureService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.courseType = history.state.type;
    const user = this.userService.actualUser.getValue();
    this.isAdmin = this.userService.isAdmin(user);
    this.route.params.subscribe(data => {
      this.id = data['id'];
      this.getSignature();
    });
  }

  public deleteSignature() {
    let nextRoute = '/teaching'
    switch(this.courseType) {
      case 'grade': 
        nextRoute = `${nextRoute}/degrees`
        break;
      case 'master':
        nextRoute = `${nextRoute}/masters`
        break;
      case 'doctorate':
        nextRoute = `${nextRoute}/doctorates`
        break;
    }
    this.signatureService.delete(this.signature.id).then(() => {
      this.router.navigateByUrl(nextRoute);
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
