import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ChallengesService } from '../services/challenges.service';
import { ChallengeDetailComponent } from './challenge-detail.component';

describe('ChallengeDetailComponent', () => {
  let component: ChallengeDetailComponent;
  let fixture: ComponentFixture<ChallengeDetailComponent>;
  let challengesServiceStub: any;
  let de: DebugElement;
  let el: HTMLElement;
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
  let activatedRouteStub: any;
  challengesServiceStub = {
    isFavourite: (id: number) => {
      return false;
    },
    toggleFavourite: () => {},
    getChallenges: () => {
      return of([expectedChallenge]);
    },
  };
  activatedRouteStub = {
    snapshot: {
      paramMap: {
        get: (id: number) => {
          return 0;
        },
      },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChallengeDetailComponent],
      providers: [
        { provide: ChallengesService, useValue: challengesServiceStub },
        { provide: ActivatedRoute, useValue: activatedRouteStub },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeDetailComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    el = de.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('#toggleFavourite() should toggle isFavourite', () => {
    component.toggleFavourite();
    expect(component.isFavourite).toBeTrue();
  });
  it('should initialize chellenge', () => {
    expect(component.challenge).toBe(expectedChallenge);
  });
  it('should display challenge title', () => {
    expect(el.textContent).toContain(component.challenge.node.title[0].text);
  });
  it('should contain challenge logo', () => {
    expect(el.querySelector('img').src).toContain(
      component.challenge.node.logo.url
    );
  });
});
