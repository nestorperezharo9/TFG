import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureMasterFormComponent } from './signature-master-form.component';

describe('SignatureMasterFormComponent', () => {
  let component: SignatureMasterFormComponent;
  let fixture: ComponentFixture<SignatureMasterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignatureMasterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignatureMasterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
