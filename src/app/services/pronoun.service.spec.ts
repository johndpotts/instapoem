import { TestBed } from '@angular/core/testing';

import { PronounService } from './pronoun.service';

describe('PronounService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PronounService = TestBed.get(PronounService);
    expect(service).toBeTruthy();
  });
});
