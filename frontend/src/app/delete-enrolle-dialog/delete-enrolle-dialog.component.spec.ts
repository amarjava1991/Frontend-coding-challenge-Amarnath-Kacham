import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEnrolleDialogComponent } from './delete-enrolle-dialog.component';

describe('DeleteEnrolleDialogComponent', () => {
  let component: DeleteEnrolleDialogComponent;
  let fixture: ComponentFixture<DeleteEnrolleDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteEnrolleDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEnrolleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
