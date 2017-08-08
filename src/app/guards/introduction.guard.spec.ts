import { TestBed, async, inject } from '@angular/core/testing';

import { IntroductionGuard } from './introduction.guard';

describe('IntroductionGuar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntroductionGuard]
    });
  });

  it('should ...', inject([IntroductionGuard], (guard: IntroductionGuard) => {
    expect(guard).toBeTruthy();
  }));
});
