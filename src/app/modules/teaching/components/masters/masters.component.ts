import { Component, OnInit } from '@angular/core';
import { Master } from 'src/app/model/master.model';

@Component({
  selector: 'app-masters',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.scss']
})
export class MastersComponent implements OnInit {

  public masters: Master[] = []
  //public signatures: Signature[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
