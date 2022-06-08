import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isUser: boolean
  public isAdmin: boolean

  constructor(
    private userService: UserService
  ) { }

  async ngOnInit(): Promise<void> {
    const user = this.userService.actualUser.getValue();
    this.isUser = this.userService.isUser(user);
    const admin = this.userService.actualUser.getValue();
    this.isAdmin = this.userService.isAdmin(admin);
  }

}
