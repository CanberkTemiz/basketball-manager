import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamRosterComponent } from './team-roster.component';

describe('TeamRosterComponent', () => {
  let component: TeamRosterComponent;
  let fixture: ComponentFixture<TeamRosterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamRosterComponent]
    });
    fixture = TestBed.createComponent(TeamRosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
