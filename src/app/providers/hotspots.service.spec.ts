import { TestBed } from '@angular/core/testing';

import { HotspotsService } from './hotspots.service';

describe('HotspotsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HotspotsService = TestBed.get(HotspotsService);
    expect(service).toBeTruthy();
  });
});
