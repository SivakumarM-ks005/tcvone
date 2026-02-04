import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandDialog } from './brand-dialog';

describe('BrandDialog', () => {
  let component: BrandDialog;
  let fixture: ComponentFixture<BrandDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
