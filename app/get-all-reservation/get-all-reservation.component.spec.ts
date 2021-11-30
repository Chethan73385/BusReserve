import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllReservationComponent } from './get-all-reservation.component';

describe('GetAllReservationComponent', () => {
  let component: GetAllReservationComponent;
  let fixture: ComponentFixture<GetAllReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
