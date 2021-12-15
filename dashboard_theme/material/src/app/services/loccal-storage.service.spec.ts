import { TestBed } from '@angular/core/testing';

import { LoccalStorageService } from './loccal-storage.service';

describe('LoccalStorageService', () => {
  let service: LoccalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoccalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
