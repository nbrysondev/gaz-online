import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetTimeComponent } from './planet-time.component';

describe('PlanetTimeComponent', () => {
  let component: PlanetTimeComponent;
  let fixture: ComponentFixture<PlanetTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
