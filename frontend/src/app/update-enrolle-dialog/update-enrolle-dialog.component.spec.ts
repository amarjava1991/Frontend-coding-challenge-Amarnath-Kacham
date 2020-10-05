import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEnrolleDialogComponent } from './update-enrolle-dialog.component';

describe('UpdateEnrolleDialogComponent', () => {
  let component: UpdateEnrolleDialogComponent;
  let fixture: ComponentFixture<UpdateEnrolleDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEnrolleDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEnrolleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
