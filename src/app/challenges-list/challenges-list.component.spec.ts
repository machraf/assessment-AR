import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ChallengesService } from '../services/challenges.service';

import { ChallengesListComponent } from './challenges-list.component';

describe('ChallengesListComponent', () => {
  let component: ChallengesListComponent;
  let fixture: ComponentFixture<ChallengesListComponent>;
  let challengesServiceStub: any;
  let expectedChallenge: any;
  expectedChallenge = {
    node: {
      title: [
        {
          text: 'title',
        },
      ],
      logo: { url: 'url' },
    },
  };

  challengesServiceStub = {
    getChallenges: () => {
      return of([expectedChallenge]);
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChallengesListComponent],
      providers: [
        { provide: ChallengesService, useValue: challengesServiceStub },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain "Challenge Logo Viewer App"', () => {
    const challengeListElement: DebugElement = fixture.debugElement;
    expect(challengeListElement.nativeElement.textContent).toContain(
      'Challenge Logo Viewer App'
    );
  });
  it('should have challenges$', () => {
    expect(component.challenges$).toBeDefined();
  });
});
