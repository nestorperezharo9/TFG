import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  private user: User;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      identifier: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }

  public async login(): Promise<void> {
    if (this.form.valid) {
      const user = this.form.value as User;
      this.user = await this.userService.login(this.form.value);
      if (user) {
        this.user.password = '';
        this.userService.setUserLogged(this.user);
        this.router.navigate(['/']);
      }
    }
  }

}
