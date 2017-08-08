import { TestBed, async, inject } from '@angular/core/testing';

import { CompetitorsMenuGuard } from './competitors-menu.guard';

describe('CompetitorsMenuGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompetitorsMenuGuard]
    });
  });

  it('should ...', inject([CompetitorsMenuGuard], (guard: CompetitorsMenuGuard) => {
    expect(guard).toBeTruthy();
  }));
});
