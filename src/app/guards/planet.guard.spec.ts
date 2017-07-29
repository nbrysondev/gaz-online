import { TestBed, async, inject } from '@angular/core/testing';

import { PlanetGuard } from './planet.guard';

describe('PlanetGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanetGuard]
    });
  });

  it('should ...', inject([PlanetGuard], (guard: PlanetGuard) => {
    expect(guard).toBeTruthy();
  }));
});
