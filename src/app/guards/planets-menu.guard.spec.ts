import { TestBed, async, inject } from '@angular/core/testing';

import { PlanetsMenuGuard } from './planets-menu.guard';

describe('PlanetsMenuGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanetsMenuGuard]
    });
  });

  it('should ...', inject([PlanetsMenuGuard], (guard: PlanetsMenuGuard) => {
    expect(guard).toBeTruthy();
  }));
});
