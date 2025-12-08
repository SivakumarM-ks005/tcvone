import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogChangepassword } from './dialog-changepassword';

describe('DialogChangepassword', () => {
  let component: DialogChangepassword;
  let fixture: ComponentFixture<DialogChangepassword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogChangepassword]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogChangepassword);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
