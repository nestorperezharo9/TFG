import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileRoomComponent } from './file-room.component';

describe('FileRoomComponent', () => {
  let component: FileRoomComponent;
  let fixture: ComponentFixture<FileRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
