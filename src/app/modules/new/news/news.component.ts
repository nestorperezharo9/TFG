import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { New } from 'src/app/model/new.model';
import { NewService } from 'src/app/services/new.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public news : New[] = []

  public id : string
  public isAdmin: boolean

  constructor(
    private newService: NewService,
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit(): Promise<void> {
    const user = this.userService.actualUser.getValue();
    this.isAdmin = this.userService.isAdmin(user);
    this.news = await this.newService.getAllNewsAll();
  }

}
