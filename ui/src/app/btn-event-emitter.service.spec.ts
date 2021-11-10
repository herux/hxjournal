import { TestBed } from '@angular/core/testing';

import { BtnEventEmitterService } from './btn-event-emitter.service';

describe('BtnEventEmitterService', () => {
  let service: BtnEventEmitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BtnEventEmitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
