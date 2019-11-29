import { TestBed } from '@angular/core/testing';

import { LimerickService } from './limerick.service';

describe('LimerickService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LimerickService = TestBed.get(LimerickService);
    expect(service).toBeTruthy();
  });
});
