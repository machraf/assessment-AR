import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChallengesService } from '../services/challenges.service';
import { ChallengesListItemComponent } from './challenges-list-item.component';

describe('ChallengesListItemComponent', () => {
  let component: ChallengesListItemComponent;
  let fixture: ComponentFixture<ChallengesListItemComponent>;
  let challengesServiceStub: any;
  let de: DebugElement;
  let el: HTMLElement;
  let expectedChallenge: any;
  challengesServiceStub = {
    isFavourite: (id: number) => {
      return false;
    },
    toggleFavourite: () => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChallengesListItemComponent],
      providers: [
        { provide: ChallengesService, useValue: challengesServiceStub },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengesListItemComponent);
    component = fixture.componentInstance;

    de = fixture.debugElement;
    el = de.nativeElement;
    expectedChallenge = {
      node: {
        title: [
          {
            text: 'title',
          },
        ],
        teaser: [
          {
            text: 'teaser',
          },
        ],
      },
    };
    component.challenge = expectedChallenge;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display challenge title', () => {
    expect(el.textContent).toContain(component.challenge.node.title[0].text);
  });
  it('should display challenge teaser', () => {
    expect(el.textContent).toContain(component.challenge.node.teaser[0].text);
  });
  it('#toggleFavourite() should toggle isFavourite', () => {
    component.toggleFavourite();
    expect(component.isFavourite).toBeTrue();
  });
});
