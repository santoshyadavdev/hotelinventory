import { TestBed } from '@angular/core/testing';

import { BookingGuard } from './booking.guard';

describe('BookingGuard', () => {
  let guard: BookingGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BookingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
