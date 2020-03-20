import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleTapComponent } from './circle-tap.component';

describe('CircleTapComponent', () => {
  let component: CircleTapComponent;
  let fixture: ComponentFixture<CircleTapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleTapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
