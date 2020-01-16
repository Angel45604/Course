import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialCoursesComponent } from './special-courses.component';

describe('SpecialCoursesComponent', () => {
  let component: SpecialCoursesComponent;
  let fixture: ComponentFixture<SpecialCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
