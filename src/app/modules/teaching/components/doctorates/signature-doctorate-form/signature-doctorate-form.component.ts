import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctorate } from 'src/app/model/doctorate.model';
import { Signature } from 'src/app/model/signature.model';
import { DoctorateService } from 'src/app/services/doctorate.service';
import { SignatureService } from 'src/app/services/signature.service';

@Component({
  selector: 'app-signature-doctorate-form',
  templateUrl: './signature-doctorate-form.component.html',
  styleUrls: ['./signature-doctorate-form.component.scss']
})
export class SignatureDoctorateFormComponent implements OnInit {

  public formGroup : FormGroup
  public errorMessage : boolean = false
  public doctorates : Doctorate[] = []
  public signatures: { [key: string]: Signature[] } = {}

  constructor(
    private signatureService : SignatureService,
    private doctorateService: DoctorateService,
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
      duration : new FormControl(null, Validators.compose([Validators.min(1), Validators.max(2),Validators.required])),
      credits : new FormControl(null, Validators.compose([Validators.min(1), Validators.max(12),Validators.required])),
      course : new FormControl(null, Validators.compose([Validators.min(1), Validators.max(5),Validators.required])),
      teachingProject : new FormControl('', Validators.required),
      courseId : new FormControl('', Validators.required)
    })
    this.doctorates = await this.doctorateService.findAll();
    this.getSignatures();
  }

  public crearFormulario() {
    if (this.formGroup.valid) {
      this.errorMessage = false;
      this.signatureService.createSignatureDoctorate(this.formGroup.value);
      this.router.navigate(['teaching', 'doctorates']);
    } else {
      this.errorMessage = true;
    }
  }

  private getSignatures() {
    this.doctorates.forEach(async(doctorate) => {
      this.signatures[doctorate.name] = await this.signatureService.findByCourseId(doctorate.id);
    });
  }

}
