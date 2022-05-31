import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileTeacherComponent } from './file-teacher.component';

describe('FileTeacherComponent', () => {
  let component: FileTeacherComponent;
  let fixture: ComponentFixture<FileTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
