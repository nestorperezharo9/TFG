import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private degreeService: DegreeService,
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
      this.degreeService.create(this.formGroup.value);
      this.router.navigate(['teaching', 'degrees']);
    } else {
      this.errorMessage = true;
    }
  }

}
