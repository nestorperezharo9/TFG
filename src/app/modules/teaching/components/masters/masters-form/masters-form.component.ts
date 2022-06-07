import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-masters-form',
  templateUrl: './masters-form.component.html',
  styleUrls: ['./masters-form.component.scss']
})
export class MastersFormComponent implements OnInit {

  public formGroup: FormGroup;
  public errorMessage: boolean = false;

  constructor(
    private masterService: MasterService
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
      this.masterService.create(this.formGroup.value);
    } else {
      this.errorMessage = true;
    }
  }
}
