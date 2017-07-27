import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorePlanetComponent } from './explore-planet.component';

describe('ExplorePlanetComponent', () => {
  let component: ExplorePlanetComponent;
  let fixture: ComponentFixture<ExplorePlanetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplorePlanetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorePlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
