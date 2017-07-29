import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetWeatherComponent } from './planet-weather.component';

describe('PlanetWeatherComponent', () => {
  let component: PlanetWeatherComponent;
  let fixture: ComponentFixture<PlanetWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
