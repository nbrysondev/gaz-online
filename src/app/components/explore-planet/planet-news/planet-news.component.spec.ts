import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetNewsComponent } from './planet-news.component';

describe('PlanetNewsComponent', () => {
  let component: PlanetNewsComponent;
  let fixture: ComponentFixture<PlanetNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
