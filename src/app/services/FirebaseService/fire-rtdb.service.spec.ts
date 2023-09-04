import { TestBed } from '@angular/core/testing';

import { FireRTDBService } from './fire-rtdb.service';

describe('FireRTDBService', () => {
  let service: FireRTDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireRTDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
