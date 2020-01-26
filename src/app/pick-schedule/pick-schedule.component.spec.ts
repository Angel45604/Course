import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickScheduleComponent } from './pick-schedule.component';

describe('PickScheduleComponent', () => {
  let component: PickScheduleComponent;
  let fixture: ComponentFixture<PickScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
