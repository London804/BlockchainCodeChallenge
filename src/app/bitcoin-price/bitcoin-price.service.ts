import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject';

import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/switchMap';


const API_URL = 'https://api.blockchain.info/price/index-series?base=btc&quote=USD&start=1503145039&scale=7200';

@Injectable()
export class BitcoinPriceService {

loadstate: boolean;

stateChange: Subject<boolean> = new Subject<boolean>();

moneyArray = [];

moneyChange: Subject<any> = new Subject<any>();

private getArray(): void {
	// this.moneyChange.next(this.moneyArray);
}

	constructor(private http: Http) {
		this.loadstate = false;
	}

	private showLoader(): void {
	  this.loadstate = true;
	  this.stateChange.next(this.loadstate);
	}

	private hideLoader(): void {
	  this.loadstate = false;
	  this.stateChange.next(this.loadstate);
	}

	getData(url = API_URL) {
		this.showLoader();
		return this.http.get(API_URL)
			.subscribe((res: Response) => {
				// this.moneyArray.push(res.json())
			    let results = this.moneyArray;
			    let obj = res.json();
			    obj.forEach(
			        function (o: any) {
			            results.push(o);
			        }
			    );
			})
			// .error(err => {
			//   console.error('handling error within getPhones()', err);
			//   const fakeData = [{ name: 'no phones could be loaded' }];
			//   return Observable.of(fakeData);
			// })
			// .finally(() => {
			// 		this.getArray();
   //        this.hideLoader();

   //        console.log('hideloader', this.loadstate);
   //        console.log(this.moneyArray);
   //    });
  }

}

