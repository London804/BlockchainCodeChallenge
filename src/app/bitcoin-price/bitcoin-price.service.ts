import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/switchMap';

const API_URL = 'https://api.blockchain.info/price/index-series?base=btc&quote=USD&start=1503145039&scale=7200';

@Injectable()
export class BitcoinPriceService {

loadstate: boolean;

	constructor(private http: Http) { }

	private showLoader(): void {
	  console.log('Show loader');
	  this.loadstate = true;
	}

	private hideLoader(): void {
	  console.log('Hide loader');
	  this.loadstate = false;
	}

	getData(url = API_URL) {
		this.showLoader();
		return this.http.get(API_URL)
			.map((res: Response) => 
				res.json(),
				this.hideLoader())
			.catch(err => {
			  console.error('handling error within getPhones()', err);
			  const fakeData = [{ name: 'no phones could be loaded' }];
			  return Observable.of(fakeData);
			});
  }

}
