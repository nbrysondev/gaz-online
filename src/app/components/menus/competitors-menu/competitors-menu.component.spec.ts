import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitorsMenuComponent } from './competitors-menu.component';

describe('CompetitorsMenuComponent', () => {
  let component: CompetitorsMenuComponent;
  let fixture: ComponentFixture<CompetitorsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitorsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitorsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
