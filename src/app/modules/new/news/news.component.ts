import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { New } from 'src/app/model/new.model';
import { NewService } from 'src/app/services/new.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public news : New[] = []

  constructor(
    private newService: NewService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit(): Promise<void> {
    this.news = await this.newService.getAllNewsAll();
    console.log(this.news);
  }

}
