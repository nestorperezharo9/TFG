import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Degree } from 'src/app/model/degree.model';
import { Signature } from 'src/app/model/signature.model';
import { DegreeService } from 'src/app/services/degree.service';
import { SignatureService } from 'src/app/services/signature.service';

@Component({
  selector: 'app-signature-degree-form',
  templateUrl: './signature-degree-form.component.html',
  styleUrls: ['./signature-degree-form.component.scss']
})
export class SignatureDegreeFormComponent implements OnInit {

  public formGroup : FormGroup
  public errorMessage : boolean = false
  public degrees : Degree[] = []
  public signatures: { [key: string]: Signature[] } = {}

  constructor(
    private signatureService : SignatureService,
    private degreeService: DegreeService,
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
    this.degrees = await this.degreeService.findAll();
    this.getSignatures();
  }

  public crearFormulario() {
    if (this.formGroup.valid) {
      this.errorMessage = false;
      this.signatureService.create(this.formGroup.value);
      console.log(this.formGroup.value)
      this.router.navigate(['teaching', 'degrees']);
    } else {
      this.errorMessage = true;
    }
  }

  private getSignatures() {
    this.degrees.forEach(async(degree) => {
      this.signatures[degree.name] = await this.signatureService.findByCourseId(degree.id);
    });
  }

}
