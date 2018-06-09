import { TestBed, inject } from '@angular/core/testing';

import { FetchAllInfoService } from './fetch-all-info.service';

describe('FetchAllInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchAllInfoService]
    });
  });

  it('should be created', inject([FetchAllInfoService], (service: FetchAllInfoService) => {
    expect(service).toBeTruthy();
  }));
});
