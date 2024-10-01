import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SundaySpecialComponent } from './sunday-special.component';

describe('SundaySpecialComponent', () => {
  let component: SundaySpecialComponent;
  let fixture: ComponentFixture<SundaySpecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SundaySpecialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SundaySpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
