import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirefoxlandingComponent } from './firefoxlanding.component';

describe('FirefoxlandingComponent', () => {
  let component: FirefoxlandingComponent;
  let fixture: ComponentFixture<FirefoxlandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirefoxlandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirefoxlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
