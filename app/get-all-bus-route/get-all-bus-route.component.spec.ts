import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllBusRouteComponent } from './get-all-bus-route.component';

describe('GetAllBusRouteComponent', () => {
  let component: GetAllBusRouteComponent;
  let fixture: ComponentFixture<GetAllBusRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllBusRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllBusRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
