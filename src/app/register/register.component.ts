import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      identifier: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }

  public async register(): Promise<void> {
    if (this.form.valid) {
      await this.userService.register(this.form.value);
    }
  }

}
