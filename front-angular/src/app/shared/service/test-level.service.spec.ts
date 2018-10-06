import { TestBed } from '@angular/core/testing';

import { TestLevelService } from './test-level.service';

describe('TestLevelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestLevelService = TestBed.get(TestLevelService);
    expect(service).toBeTruthy();
  });
});
