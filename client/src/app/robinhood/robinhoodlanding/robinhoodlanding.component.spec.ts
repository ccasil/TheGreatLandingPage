import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobinhoodlandingComponent } from './robinhoodlanding.component';

describe('RobinhoodlandingComponent', () => {
  let component: RobinhoodlandingComponent;
  let fixture: ComponentFixture<RobinhoodlandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobinhoodlandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobinhoodlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
