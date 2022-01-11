import { TestBed } from '@angular/core/testing';

import { RoomGuard } from './room.guard';

describe('RoomGuard', () => {
  let guard: RoomGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RoomGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
