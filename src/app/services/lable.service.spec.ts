import { TestBed } from '@angular/core/testing';

import { LableService } from './lable.service';

describe('LableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LableService = TestBed.get(LableService);
    expect(service).toBeTruthy();
  });
});
