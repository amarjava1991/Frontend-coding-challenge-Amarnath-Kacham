import { TestBed } from '@angular/core/testing';

import { EnrollesService } from './enrolles.service';

describe('EnrollesService', () => {
  let service: EnrollesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrollesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
