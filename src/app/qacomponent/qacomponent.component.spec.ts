import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QAComponentComponent } from './qacomponent.component';

describe('QAComponentComponent', () => {
  let component: QAComponentComponent;
  let fixture: ComponentFixture<QAComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QAComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QAComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
