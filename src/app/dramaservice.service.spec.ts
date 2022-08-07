import { TestBed } from '@angular/core/testing';

import { DramaserviceService } from './dramaservice.service';

describe('DramaserviceService', () => {
  let service: DramaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DramaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
