import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CurrRate } from './models';
import { ExchangeService } from './exchange.service';
import { map, catchError } from 'rxjs/operators';

@Pipe({
  name: 'rates'
})
export class RatesPipe implements PipeTransform {

  constructor(private exchangeService: ExchangeService) { }

  transform(sum: number = 0, symbols: string[] = []): Observable<CurrRate> {
    if (symbols.length === 0 || isNaN(sum)) {
      return of({});
    }

    return this.exchangeService.getLatestRates('USD', symbols)
      .pipe(
        map(rates => symbols.reduce((res, nextSymbol) => {
          res[this.exchangeService.getStrangeCurrencyName(nextSymbol)] = sum * rates[nextSymbol];
          return res;
        }, {})),
      catchError(() => {
        const res = {};
        res[this.exchangeService.getStrangeCurrencyName('USD')] = sum;
        return of(res);
      })
    );
  }

}
