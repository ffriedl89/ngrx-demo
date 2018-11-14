import { TestBed } from '@angular/core/testing';

import { CloudfoundryService } from './cloudfoundry.service';

describe('CloudfoundryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CloudfoundryService = TestBed.get(CloudfoundryService);
    expect(service).toBeTruthy();
  });
});
