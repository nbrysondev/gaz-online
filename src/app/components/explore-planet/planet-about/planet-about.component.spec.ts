import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetAboutComponent } from './planet-about.component';

describe('PlanetAboutComponent', () => {
  let component: PlanetAboutComponent;
  let fixture: ComponentFixture<PlanetAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
