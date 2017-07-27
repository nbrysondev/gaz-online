import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetMenuComponent } from './planet-menu.component';

describe('PlanetMenuComponent', () => {
  let component: PlanetMenuComponent;
  let fixture: ComponentFixture<PlanetMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
