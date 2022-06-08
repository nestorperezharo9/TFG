import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureDegreeFormComponent } from './signature-degree-form.component';

describe('SignatureDegreeFormComponent', () => {
  let component: SignatureDegreeFormComponent;
  let fixture: ComponentFixture<SignatureDegreeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignatureDegreeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignatureDegreeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
