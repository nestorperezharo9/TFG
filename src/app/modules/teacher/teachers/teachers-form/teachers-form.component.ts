import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignatureService } from 'src/app/services/signature.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teachers-form',
  templateUrl: './teachers-form.component.html',
  styleUrls: ['./teachers-form.component.scss']
})
export class TeachersFormComponent implements OnInit {

  public formGroup: FormGroup;
  public errorMessage: boolean = false;
  public signatures: {id: string, selected: boolean, title: string}[] = [];

  constructor(
    private teacherService: TeacherService,
    private signatureService: SignatureService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.getSignatures();
    this.formGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      surnames: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      knowledge_area: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
      telephone: new FormControl(null, Validators.required),
      office: new FormControl('', Validators.required),
      signatures: new FormControl([], Validators.required),
      staff: new FormControl(null, Validators.required),
      position: new FormControl(null, Validators.required)
    })
  }

  public crearFormulario() {
    if (this.formGroup.valid) {
      this.errorMessage = false;
      console.log(this.formGroup.value)
      this.teacherService.create(this.formGroup.value);
    } else {
      this.errorMessage = true;
    }
  }

  public selectSignaturesHandler(event) {
    console.log(event);
  }

  private async getSignatures() {
    const signatures = await this.signatureService.findAll();
    this.signatures = signatures.map(signature => {
      return {
        id: signature.id,
        selected: false,
        title: signature.name
      };
    })
    console.log(this.signatures)
  }

}
