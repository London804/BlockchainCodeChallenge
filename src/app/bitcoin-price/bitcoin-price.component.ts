import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BitcoinPriceService } from './bitcoin-price.service';

@Component({
  selector: 'app-bitcoin-price',
  templateUrl: './bitcoin-price.component.html',
  styleUrls: ['./bitcoin-price.component.scss']
})
export class BitcoinPriceComponent implements OnInit {

  data: Observable<any[]>;

  loadstate: boolean;

  constructor(bs: BitcoinPriceService) {
  	console.log(bs);
    this.data = bs.getData();
   
    console.log(this.data);
    // console.log('loadstate', this.loadstate);

  }

  ngOnInit() {
  }

}
