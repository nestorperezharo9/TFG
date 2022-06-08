import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private masterService: MasterService,
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
      this.masterService.create(this.formGroup.value);
      this.router.navigate(['teaching', 'masters']);
    } else {
      this.errorMessage = true;
    }
  }
}
