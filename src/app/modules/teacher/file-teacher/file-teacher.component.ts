import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KnowledgeArea, Category, Staff, Teacher } from 'src/app/model/teacher.model';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-file-teacher',
  templateUrl: './file-teacher.component.html',
  styleUrls: ['./file-teacher.component.scss']
})
export class FileTeacherComponent implements OnInit {

  public teacher: Teacher
  
  private id: string

  constructor(
    private teacherService: TeacherService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.id = data['id'];
      this.getTeacherById();
    });
  }

  private async getTeacherById() {
    this.teacher = await this.teacherService.findTeacherById(this.id);
  }

  public getKnowledgeArea(knowledge_area: string) {
    return KnowledgeArea[knowledge_area];
  }

  public getCategory(category: string) {
    return Category[category];
  }

}
