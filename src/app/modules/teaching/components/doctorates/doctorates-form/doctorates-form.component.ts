import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private doctorateService: DoctorateService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl('', Validators.required)
    })
  }

  public crearFormulario() {
    if (this.formGroup.valid) {
      this.errorMessage = false;
      this.doctorateService.create(this.formGroup.value);
      this.router.navigate(['teaching', 'doctorates']);
    } else {
      this.errorMessage = true;
    }
  }

}
