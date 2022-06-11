import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.scss']
})
export class UnsubscribeComponent implements OnInit {

  public form: FormGroup;
  public errorMessage: boolean = false;
  public aciertMessage: boolean = false;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      identifier: new FormControl(null, Validators.required)
    })
  }

  public async unsubscribe(): Promise<void> {
    if (this.form.valid) {
      this.errorMessage = false;
      await this.userService.unsubscribe(this.form.value);
      this.aciertMessage = true;
    } else {
      this.aciertMessage = false;
      this.errorMessage = true;
    }
  }

}
