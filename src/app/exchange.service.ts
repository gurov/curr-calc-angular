import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CurrRate } from './models';

const APIPATH = 'https://api.exchangeratesapi.io/latest';


@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  private getRequestOptions(paramsObj: any) {
    const params = new HttpParams({fromObject: paramsObj});
    return { params };
  }

  constructor(private http: HttpClient) { }

  getLatestRates(base, symbols): Observable<CurrRate> {
    return this.http.get(APIPATH, this.getRequestOptions({ base, symbols: symbols.join(',') }))
      .pipe(map(data => data['rates']));
  }

  getStrangeCurrencyName(symbol: string = '') {
    const nameMap = {
      RUB: 'rubles',
      EUR: 'euros',
      USD: 'US dollars',
      GBP: 'pounds',
      JPY: 'yens'
    };
    return nameMap[symbol] || symbol;
  }


}

