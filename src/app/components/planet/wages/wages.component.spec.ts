import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WagesComponent } from './wages.component';

describe('WagesComponent', () => {
  let component: WagesComponent;
  let fixture: ComponentFixture<WagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
