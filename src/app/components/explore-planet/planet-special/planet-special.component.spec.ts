import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetSpecialComponent } from './planet-special.component';

describe('PlanetSpecialComponent', () => {
  let component: PlanetSpecialComponent;
  let fixture: ComponentFixture<PlanetSpecialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetSpecialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
