import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/model/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  public students: Student[] = []

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit(): Promise<void> {
    this.students = await this.studentService.getAllStudents();
  }



}
