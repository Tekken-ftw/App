import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchupGuideComponent } from './matchup-guide.component';

describe('MatchupGuideComponent', () => {
  let component: MatchupGuideComponent;
  let fixture: ComponentFixture<MatchupGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchupGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchupGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
