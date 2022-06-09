import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Master } from 'src/app/model/master.model';
import { Signature } from 'src/app/model/signature.model';
import { MasterService } from 'src/app/services/master.service';
import { SignatureService } from 'src/app/services/signature.service';

@Component({
  selector: 'app-signature-master-form',
  templateUrl: './signature-master-form.component.html',
  styleUrls: ['./signature-master-form.component.scss']
})
export class SignatureMasterFormComponent implements OnInit {

  public formGroup : FormGroup
  public errorMessage : boolean = false
  public masters : Master[] = []
  public signatures: { [key: string]: Signature[] } = {}

  constructor(
    private signatureService : SignatureService,
    private masterService: MasterService,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    this.formGroup = new FormGroup({
      code : new FormControl(null, Validators.required),
      name : new FormControl('', Validators.required),
      plan : new FormControl(null, Validators.required),
      specialty : new FormControl('', Validators.required),
      school : new FormControl('', Validators.required),
      department : new FormControl([], Validators.required),
      type : new FormControl('', Validators.required),
      character : new FormControl('', Validators.required),
      duration : new FormControl(null, Validators.required),
      credits : new FormControl(null, Validators.required),
      course : new FormControl(null, Validators.required),
      teachingProject : new FormControl('', Validators.required),
      courseId : new FormControl('', Validators.required)
    })
    this.masters = await this.masterService.findAll();
    this.getSignatures();
  }

  public crearFormulario() {
    if (this.formGroup.valid) {
      this.errorMessage = false;
      this.signatureService.createSignatureMaster(this.formGroup.value);
      this.router.navigate(['teaching', 'masters']);
    } else {
      this.errorMessage = true;
    }
  }

  private getSignatures() {
    this.masters.forEach(async(master) => {
      this.signatures[master.name] = await this.signatureService.findByCourseId(master.id);
    });
  }

}
