import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Signature } from 'src/app/model/signature.model';
import { KnowledgeArea, Category, Teacher } from 'src/app/model/teacher.model';
import { SignatureService } from 'src/app/services/signature.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-file-teacher',
  templateUrl: './file-teacher.component.html',
  styleUrls: ['./file-teacher.component.scss']
})
export class FileTeacherComponent implements OnInit {

  public teacher: Teacher
  public signatures: Signature[] = [];
  
  private id: string

  constructor(
    private teacherService: TeacherService,
    private signatureService: SignatureService,
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
    this.teacher.signatures.forEach(async(id) => {
      const signature = await this.signatureService.findById(id);
      this.signatures.push(signature);
    });
  }

  public getKnowledgeArea(knowledge_area: string) {
    return KnowledgeArea[knowledge_area];
  }

  public getCategory(category: string) {
    return Category[category];
  }

}
