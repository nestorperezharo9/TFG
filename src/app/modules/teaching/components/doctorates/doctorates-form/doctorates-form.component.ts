import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DoctorateService } from 'src/app/services/doctorate.service';

@Component({
  selector: 'app-doctorates-form',
  templateUrl: './doctorates-form.component.html',
  styleUrls: ['./doctorates-form.component.scss']
})
export class DoctoratesFormComponent implements OnInit {

  public formGroup: FormGroup;
  public errorMessage: boolean = false;

  constructor(
    private doctorateService: DoctorateService
  ) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl('', Validators.required)
    })
  }

  public crearFormulario() {
    if (this.formGroup.valid) {
      this.errorMessage = false;
      console.log(this.formGroup.value)
      this.doctorateService.create(this.formGroup.value);
    } else {
      this.errorMessage = true;
    }
  }

}
