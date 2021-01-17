import { TestBed } from '@angular/core/testing';

import { ChallengesService } from './challenges.service';

describe('ChallengesService', () => {
  let service: ChallengesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChallengesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should initialize favourites', () => {
    expect(service.getFavourites()).toBeDefined();
  });

  it('#isFavourite() should return false if id does not exists', () => {
    expect(service.isFavourite(0)).toBeFalse();

    let map: Map<number, boolean>;
    map = new Map();
    map.set(0, false);
    map.set(1, true);
    service.setFavourites(map);

    expect(service.isFavourite(3)).toBeFalse();
  });
  it('#isFavourite() should return the boolean value if id does exists', () => {
    let map: Map<number, boolean>;
    map = new Map();
    map.set(0, false);
    map.set(1, true);
    service.setFavourites(map);

    expect(service.isFavourite(0)).toBeFalse();
    expect(service.isFavourite(1)).toBeTrue();
  });
  it('#toggleFavourite() should togglle the boolean value if id does exists', () => {
    let map: Map<number, boolean>;
    map = new Map();
    map.set(0, false);
    map.set(1, true);

    service.setFavourites(map);
    service.toggleFavourite(0);
    service.toggleFavourite(1);

    expect(service.getFavourites().get(0)).toBeTrue();
    expect(service.getFavourites().get(1)).toBeFalse();
  });
  it('#toggleFavourite() should assert true if id does not exists', () => {
    service.toggleFavourite(0);
    service.toggleFavourite(1);

    expect(service.getFavourites().get(0)).toBeTrue();
    expect(service.getFavourites().get(1)).toBeTrue();
  });
});
