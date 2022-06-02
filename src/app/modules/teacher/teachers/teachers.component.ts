import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KnowledgeArea, Teacher } from 'src/app/model/teacher.model';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  public teachers: Teacher[] = []
  public staff: string

  public teachersByArea: Object[] = [];
  public teachersPAS: Object[] = [];

  constructor(
    private teacherService: TeacherService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit(): Promise<void> {
    this.teachers = await this.teacherService.getAllTeachers();
    this.getTeachersByArea();
    this.getTeachersAreaPAS();
  }

  private getTeachersByArea() {
    this.teachersByArea = [];
    for (const area in KnowledgeArea) {
      if(area !== 'NONE') {
        const teachers = this.teachers.filter(teacher => teacher.knowledge_area === area)
        this.teachersByArea.push({area: area, teachers: teachers})
      }
    }
  }
  
  private getTeachersAreaPAS() {
    this.teachersPAS = [];
    for (const area in KnowledgeArea) {
      if(area === 'NONE') {
        const teachers = this.teachers.filter(teacher => teacher.knowledge_area === area)
        this.teachersPAS.push({area: area, teachers: teachers})
      }
    }
  }

  public getKnowledgeArea(knowledge_area: string) {
    return KnowledgeArea[knowledge_area];
  }

}
