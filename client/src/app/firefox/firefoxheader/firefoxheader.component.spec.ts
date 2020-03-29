import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirefoxheaderComponent } from './firefoxheader.component';

describe('FirefoxheaderComponent', () => {
  let component: FirefoxheaderComponent;
  let fixture: ComponentFixture<FirefoxheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirefoxheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirefoxheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
