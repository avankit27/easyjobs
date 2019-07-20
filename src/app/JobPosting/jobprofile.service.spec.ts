import { TestBed } from '@angular/core/testing';

import { JobprofileService } from './jobprofile.service';

describe('JobprofileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobprofileService = TestBed.get(JobprofileService);
    expect(service).toBeTruthy();
  });
});
