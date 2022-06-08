import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureDoctorateFormComponent } from './signature-doctorate-form.component';

describe('SignatureDoctorateFormComponent', () => {
  let component: SignatureDoctorateFormComponent;
  let fixture: ComponentFixture<SignatureDoctorateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignatureDoctorateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignatureDoctorateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
