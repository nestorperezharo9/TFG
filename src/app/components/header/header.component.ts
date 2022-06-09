import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isUser: boolean
  public isAdmin: boolean
  public user: User;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.actualUser.subscribe(data => {
      if (data) {
        this.user = data;
        this.isUser = this.userService.isUser(this.user);
        this.isAdmin = this.userService.isAdmin(this.user);
      } else {
        this.user = null;
        this.isUser = false;
        this.isAdmin = false;
      }
    }); 
  }

  public async logout(): Promise<void> {
    this.userService.setUserLogged(null);
  }

}
