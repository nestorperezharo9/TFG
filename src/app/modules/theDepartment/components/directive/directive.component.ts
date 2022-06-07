import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Position, Teacher } from 'src/app/model/teacher.model';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {

  public teachers: Teacher[] = []

  public teachersByPosition: Object[] = []

  private id: String

  constructor(
    private teacherService: TeacherService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit(): Promise<void> {
    this.teachers = await this.teacherService.getAllDirective();
    this.getTeachersByPosition();
  }

  private getTeachersByPosition() {
    this.teachersByPosition = [];
    for (const pos in Position) {
      if(pos !== 'NONE') {
        const teachers = this.teachers.filter(teacher => teacher.position === pos)
        this.teachersByPosition.push({pos: pos, teachers: teachers})
      }
    }
  }

}
