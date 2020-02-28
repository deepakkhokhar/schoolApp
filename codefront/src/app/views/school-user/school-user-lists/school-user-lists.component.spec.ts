import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolUserListsComponent } from './school-user-lists.component';

describe('SchoolUserListsComponent', () => {
  let component: SchoolUserListsComponent;
  let fixture: ComponentFixture<SchoolUserListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolUserListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolUserListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
