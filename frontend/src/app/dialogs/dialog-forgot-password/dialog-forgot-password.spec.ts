import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogForgotPassword } from './dialog-forgot-password';

describe('DialogForgotPassword', () => {
  let component: DialogForgotPassword;
  let fixture: ComponentFixture<DialogForgotPassword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogForgotPassword]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogForgotPassword);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
