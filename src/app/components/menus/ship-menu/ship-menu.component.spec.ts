import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipMenuComponent } from './ship-menu.component';

describe('ShipMenuComponent', () => {
  let component: ShipMenuComponent;
  let fixture: ComponentFixture<ShipMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
