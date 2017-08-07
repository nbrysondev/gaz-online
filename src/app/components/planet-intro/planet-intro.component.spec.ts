import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetIntroComponent } from './planet-intro.component';

describe('PlanetIntroComponent', () => {
  let component: PlanetIntroComponent;
  let fixture: ComponentFixture<PlanetIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
