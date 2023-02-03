import { TestBed } from '@angular/core/testing';

import { NoticeFeedService } from './notice-feed.service';

describe('NoticeFeedService', () => {
  let service: NoticeFeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoticeFeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
