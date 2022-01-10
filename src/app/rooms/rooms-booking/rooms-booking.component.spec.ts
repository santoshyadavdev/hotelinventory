import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsBookingComponent } from './rooms-booking.component';

describe('RoomsBookingComponent', () => {
  let component: RoomsBookingComponent;
  let fixture: ComponentFixture<RoomsBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomsBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
