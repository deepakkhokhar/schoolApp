import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSchoolUserComponent } from './add-school-user.component';

describe('AddSchoolUserComponent', () => {
  let component: AddSchoolUserComponent;
  let fixture: ComponentFixture<AddSchoolUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSchoolUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSchoolUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
