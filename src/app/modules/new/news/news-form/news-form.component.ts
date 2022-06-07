import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewService } from 'src/app/services/new.service';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent implements OnInit {

  public formGroup: FormGroup;
  public errorMessage: boolean = false;

  constructor(
    private newsService: NewService
  ) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      file: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required)
    })
  }

  public crearFormulario() {
    if (this.formGroup.valid) {
      this.errorMessage = false;
      console.log(this.formGroup.value)
      this.newsService.create(this.formGroup.value);
    } else {
      this.errorMessage = true;
    }
  }
}
