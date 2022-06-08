import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-vpn',
  templateUrl: './vpn.component.html',
  styleUrls: ['./vpn.component.scss']
})
export class VpnComponent implements OnInit {

  public isUser: boolean

  constructor(
    private userService: UserService
  ) { }

  async ngOnInit(): Promise<void> {
    const user = this.userService.actualUser.getValue();
    this.isUser = this.userService.isUser(user);
  }

}
