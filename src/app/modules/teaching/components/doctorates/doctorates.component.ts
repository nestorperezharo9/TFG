import { Component, OnInit } from '@angular/core';
import { Doctorate } from 'src/app/model/doctorate.model';

@Component({
  selector: 'app-doctorates',
  templateUrl: './doctorates.component.html',
  styleUrls: ['./doctorates.component.scss']
})
export class DoctoratesComponent implements OnInit {

  public doctorates: Doctorate[] = []
  //public signatures: Signature[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
