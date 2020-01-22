import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInSpecialComponent } from './sign-in-special.component';

describe('SignInSpecialComponent', () => {
  let component: SignInSpecialComponent;
  let fixture: ComponentFixture<SignInSpecialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInSpecialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
