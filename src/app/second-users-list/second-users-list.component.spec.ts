import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondUsersListComponent } from './second-users-list.component';

describe('SecondUsersListComponent', () => {
  let component: SecondUsersListComponent;
  let fixture: ComponentFixture<SecondUsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondUsersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
