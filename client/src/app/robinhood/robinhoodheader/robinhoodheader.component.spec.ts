import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobinhoodheaderComponent } from './robinhoodheader.component';

describe('RobinhoodheaderComponent', () => {
  let component: RobinhoodheaderComponent;
  let fixture: ComponentFixture<RobinhoodheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobinhoodheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobinhoodheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
