import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { BitcoinPriceService } from './bitcoin-price.service';

@Component({
  selector: 'app-bitcoin-price',
  templateUrl: './bitcoin-price.component.html',
  styleUrls: ['./bitcoin-price.component.scss']
})
export class BitcoinPriceComponent implements OnInit {

  data: Observable<any[]>;

  loadstate: boolean;
  subscription: Subscription;

  constructor(bs: BitcoinPriceService) {
  	console.log(bs);
    this.data = bs.getData();
    this.loadstate = bs.loadstate
    this.subscription = bs.nameChange.subscribe((value) => { 
      this.loadstate = value; 
    });
    console.log(this.data);
    console.log('loadstate', this.loadstate);


  }

  ngOnInit() {
  }

  ngOnDestroy() {
  	//prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
