import { TestBed } from '@angular/core/testing';

import { LampiService } from './lampi.service';

describe('LampiService', () => {
  let service: LampiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LampiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
