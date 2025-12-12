import { TestBed } from '@angular/core/testing';

import { StatisticsBusinessTs } from './statistics.business.ts';

describe('StatisticsBusinessTs', () => {
  let service: StatisticsBusinessTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatisticsBusinessTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
