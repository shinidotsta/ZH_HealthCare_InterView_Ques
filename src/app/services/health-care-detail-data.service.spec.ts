import { TestBed } from '@angular/core/testing';

import { HealthCareDetailDataService } from './health-care-detail-data.service';

describe('HealthCareDetailDataService', () => {
  let service: HealthCareDetailDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthCareDetailDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
