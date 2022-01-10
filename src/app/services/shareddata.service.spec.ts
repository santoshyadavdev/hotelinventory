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
});
