import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoratesFormComponent } from './doctorates-form.component';

describe('DoctoratesFormComponent', () => {
  let component: DoctoratesFormComponent;
  let fixture: ComponentFixture<DoctoratesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctoratesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctoratesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
