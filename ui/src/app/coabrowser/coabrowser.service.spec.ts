import { TestBed } from '@angular/core/testing';

import { CoabrowserService } from './coabrowser.service';

describe('CoabrowserService', () => {
  let service: CoabrowserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoabrowserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
