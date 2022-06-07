import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DegreeService } from 'src/app/services/degree.service';

@Component({
  selector: 'app-degrees-form',
  templateUrl: './degrees-form.component.html',
  styleUrls: ['./degrees-form.component.scss']
})
export class DegreesFormComponent implements OnInit {

  public formGroup: FormGroup;
  public errorMessage: boolean = false;

  constructor(
    private degreeService: DegreeService
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
      this.degreeService.create(this.formGroup.value);
    } else {
      this.errorMessage = true;
    }
  }

}
