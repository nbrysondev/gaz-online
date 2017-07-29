import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LenderLoanComponent } from './lender-loan.component';

describe('LenderLoanComponent', () => {
  let component: LenderLoanComponent;
  let fixture: ComponentFixture<LenderLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LenderLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LenderLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
