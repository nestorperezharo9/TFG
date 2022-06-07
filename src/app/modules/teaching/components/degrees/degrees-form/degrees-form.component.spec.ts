import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreesFormComponent } from './degrees-form.component';

describe('DegreesFormComponent', () => {
  let component: DegreesFormComponent;
  let fixture: ComponentFixture<DegreesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DegreesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
