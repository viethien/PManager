import { TestBed } from '@angular/core/testing';

import { LoadHomeService } from './load-home.service';

describe('LoadHomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadHomeService = TestBed.get(LoadHomeService);
    expect(service).toBeTruthy();
  });
});
