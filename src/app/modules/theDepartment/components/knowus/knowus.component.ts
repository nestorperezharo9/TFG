import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-knowus',
  templateUrl: './knowus.component.html',
  styleUrls: ['./knowus.component.scss']
})
export class KnowusComponent implements OnInit {

  public isAdmin: boolean ;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    const user = this.userService.actualUser.getValue();
    this.isAdmin = this.userService.isAdmin(user);
  }

}
