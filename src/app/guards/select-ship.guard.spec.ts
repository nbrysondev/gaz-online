import { TestBed, async, inject } from '@angular/core/testing';

import { SelectShipGuard } from './select-ship.guard';

describe('SelectShipGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectShipGuard]
    });
  });

  it('should ...', inject([SelectShipGuard], (guard: SelectShipGuard) => {
    expect(guard).toBeTruthy();
  }));
});
