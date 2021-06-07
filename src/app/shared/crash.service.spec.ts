import { TestBed } from '@angular/core/testing';

import { CrashService } from './crash.service';

describe('CrashServiceService', () => {
  let service: CrashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
