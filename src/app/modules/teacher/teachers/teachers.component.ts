import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Teacher } from 'src/app/model/teacher.model';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  public teachers: Teacher[] = []

  public staff: string

  constructor(
    private teacherService: TeacherService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.staff = data['staff'];
      this.getTeachers();
    });
  }

  private async getTeachers() {
    this.teachers = await this.teacherService.findByStaff(this.staff);
  }

}
