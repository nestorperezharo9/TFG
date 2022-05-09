import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoratesComponent } from './doctorates.component';

describe('DoctoratesComponent', () => {
  let component: DoctoratesComponent;
  let fixture: ComponentFixture<DoctoratesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctoratesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctoratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
