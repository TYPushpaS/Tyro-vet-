import { TestBed } from '@angular/core/testing';

import { ReqserviceService } from './reqservice.service';

describe('ReqserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReqserviceService = TestBed.get(ReqserviceService);
    expect(service).toBeTruthy();
  });
});
