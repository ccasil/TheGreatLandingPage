import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirefoxfooterComponent } from './firefoxfooter.component';

describe('FirefoxfooterComponent', () => {
  let component: FirefoxfooterComponent;
  let fixture: ComponentFixture<FirefoxfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirefoxfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirefoxfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
