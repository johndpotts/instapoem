import { TestBed } from '@angular/core/testing';

import { HaikuService } from './haiku.service';

describe('HaikuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HaikuService = TestBed.get(HaikuService);
    expect(service).toBeTruthy();
  });
});
