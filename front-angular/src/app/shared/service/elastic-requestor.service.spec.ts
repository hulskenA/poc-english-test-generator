import { TestBed } from '@angular/core/testing';

import { ElasticRequestorService } from './elastic-requestor.service';

describe('ElasticRequestorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElasticRequestorService = TestBed.get(ElasticRequestorService);
    expect(service).toBeTruthy();
  });
});
