import { TestBed, async, inject } from '@angular/core/testing';

import { PlayersMenuGuard } from './players-menu.guard';

describe('PlayersMenuGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayersMenuGuard]
    });
  });

  it('should ...', inject([PlayersMenuGuard], (guard: PlayersMenuGuard) => {
    expect(guard).toBeTruthy();
  }));
});
