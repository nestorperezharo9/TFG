import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KnowledgeArea, Teacher } from 'src/app/model/teacher.model';
import { TeacherService } from 'src/app/services/teacher.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  public teachers: Teacher[] = []
  public staff: string
  public isAdmin: boolean

  public teachersByArea: Object[] = [];
  public teachersPAS: Object[] = [];

  constructor(
    private teacherService: TeacherService,
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit(): Promise<void> {
    const user = this.userService.actualUser.getValue();
    this.isAdmin = this.userService.isAdmin(user);
    this.teachers = await this.teacherService.getAllTeachers();
    this.getTeachersByArea();
    this.getTeachersAreaPAS();
  }

  public deleteTeacher(id: string) {
    this.teacherService.delete(id).then(() => {
      this.teachers = this.teachers.filter(item => item.id !== id);
    });
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
