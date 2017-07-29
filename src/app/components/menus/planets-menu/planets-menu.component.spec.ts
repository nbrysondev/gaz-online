import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsMenuComponent } from './planets-menu.component';

describe('PlanetsMenuComponent', () => {
  let component: PlanetsMenuComponent;
  let fixture: ComponentFixture<PlanetsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
