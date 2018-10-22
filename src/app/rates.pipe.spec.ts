import { RatesPipe } from './rates.pipe';
import { ExchangeService } from './exchange.service';
import { async, inject, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

describe('RatesPipe', () => {
  let ratesPipe: RatesPipe;


  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      RatesPipe,
      {
        provide: ExchangeService,
        useValue: {
          getLatestRates: (base, symbols) => of({
            USD: 1,
            EUR: 1.2
          }),
          getStrangeCurrencyName: name => name
        },
      }
    ],
  }));

  beforeEach(inject([RatesPipe], (ratesPipeInstance) => ratesPipe = ratesPipeInstance));

  it('should return empty object for null', async(() => {
    ratesPipe.transform(null, [])
      .subscribe((rate) => expect(rate).toEqual({}));
  }));

  it('should return empty object for number', async(() => {
    ratesPipe.transform(23, [])
      .subscribe((rate) => expect(rate).toEqual({}));
  }));

  it('should return empty object for string', async(() => {
    ratesPipe.transform(+'hello', ['USD'])
      .subscribe((rate) => expect(rate).toEqual({}));
  }));


  it('should return rate for USD and EUR', async(() => {
    ratesPipe.transform(10, ['USD', 'EUR'])
      .subscribe((rate) => expect(rate).toEqual({
        USD: 10.0,
        EUR: 12.0
      }));
  }));

});
