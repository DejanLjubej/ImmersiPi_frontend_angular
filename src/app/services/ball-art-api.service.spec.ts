import { TestBed } from '@angular/core/testing';

import { BallArtApiService } from './ball-art-api.service';

describe('BallArtApiService', () => {
  let service: BallArtApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BallArtApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
