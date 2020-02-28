import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolUserLoginComponent } from './school-user-login.component';

describe('SchoolUserLoginComponent', () => {
  let component: SchoolUserLoginComponent;
  let fixture: ComponentFixture<SchoolUserLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolUserLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolUserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
