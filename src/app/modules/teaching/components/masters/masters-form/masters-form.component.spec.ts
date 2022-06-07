import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MastersFormComponent } from './masters-form.component';

describe('MastersFormComponent', () => {
  let component: MastersFormComponent;
  let fixture: ComponentFixture<MastersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MastersFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MastersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
