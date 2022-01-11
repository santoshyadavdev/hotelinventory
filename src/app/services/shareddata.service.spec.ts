import { TestBed } from '@angular/core/testing';

import { ShareddataService } from './shareddata.service';

describe('ShareddataService', () => {
  let service: ShareddataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareddataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit the message', () => {
    service.setMessage('Hello');
    service.message$.subscribe(message => {
      expect(message).toBe('Hello');
    })
  });
});
