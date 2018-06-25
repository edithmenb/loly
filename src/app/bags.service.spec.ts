import { TestBed, inject } from '@angular/core/testing';

import { BagsService } from './bags.service';

describe('BagsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BagsService]
    });
  });

  it('should be created', inject([BagsService], (service: BagsService) => {
    expect(service).toBeTruthy();
  }));
});
