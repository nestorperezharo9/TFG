import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public isAdmin: boolean
  public isUser: boolean

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    const user = this.userService.actualUser.getValue();
    this.isUser = this.userService.isUser(user);
    const admin = this.userService.actualUser.getValue();
    this.isAdmin = this.userService.isAdmin(admin);
  }

}
