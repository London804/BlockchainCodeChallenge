import { TestBed, inject } from '@angular/core/testing';

import { BitcoinPriceService } from './bitcoin-price.service';

describe('BitcoinPriceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BitcoinPriceService]
    });
  });

  it('should be created', inject([BitcoinPriceService], (service: BitcoinPriceService) => {
    expect(service).toBeTruthy();
  }));
});
